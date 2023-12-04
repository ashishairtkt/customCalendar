import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Calendar from "./Calendar/Calendar";

export default function Home() {
  const [open, setOpen] = useState(false);

  const [activeTrip, setactiveTrip] = useState("depart");

  const [dpDate, setDpDate] = useState();
  const [rtDate, setRtDate] = useState();

  const handleActiveTrip = (type) => {
    if (type === "dp") setactiveTrip("depart");
    else setactiveTrip("return");
  };

  const isTripActive = (type) => {
    if (activeTrip === type) return "active";
    else return "";
  };
  const [selectedCar, setSelectedCar] = useState("");

  const handleCarChange = (event) => {
    setSelectedCar(event.target.value);
  };

  const carOptions = [
    { value: "volvo", label: "Volvo" },
    { value: "saab", label: "Saab" },
    { value: "mercedes", label: "Mercedes" },
    { value: "audi", label: "Audi" },
  ];
  let currentDate = new Date();
  let day = currentDate.getDay();
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();
  let date = `${month} ${day}, ${year}`;

  const Select = ({ id, name, options, onChange }) => {
    return (
      <select id={id} name={name} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="fields_wrapper">
            <div className="boxs">Depart</div>
            <div className="boxs">Return</div>
          </div>

          <div className="wrapper-box">
            <div className=" wrapper_date">
              <div
                className={`dp ${isTripActive("depart")}`}
                onClick={() => handleActiveTrip("dp")}
              >
                <label>Depart</label>
                <div className="dp_date">
               
                  {dpDate !== undefined ? (
                    <>
                      {" "}
                      {dpDate && dpDate[2]}
                      <span>
                        {dpDate && dpDate[1]}
                        <br />
                        {dpDate && dpDate[0]}
                      </span>
                    </>
                  ) : (
                    <>Select Date</>
                  )}
                </div>
              </div>

              <div
                className={`rt ${isTripActive("return")}`}
                onClick={() => handleActiveTrip("rt")}
              >
                <label>Return</label>
                <div className="dp_date">
                {rtDate !== undefined ? (
                    <>
                      {" "}
                      {rtDate && rtDate[2]}
                      <span>
                        {rtDate && rtDate[1]}
                        <br />
                        {rtDate && rtDate[0]}
                      </span>
                    </>
                  ) : (
                    <p>Select Return Date for Savings!</p>
                  )}
                </div>
              </div>

              <div className="closebtn">x </div>
            </div>

            <div className="row">
              <div className="curdate"> Today is {date}</div>
            </div>

            <div className="row">
              {" "}
              <Calendar
                setDpDate={setDpDate}
                dpDate={dpDate}
                setRtDate={setRtDate}
                rtDate={rtDate}
                activeTrip={activeTrip}
                setactiveTrip={setactiveTrip}
              />
            </div>

            <div className="bottom_section">
              <div className="bottom_tripname">1 Day Trip</div>

              <div>
                Current month:{" "}
                <Select
                  id="cars"
                  name="cars"
                  options={carOptions}
                  onChange={handleCarChange}
                />{" "}
                <Select
                  id="cars"
                  name="cars"
                  options={carOptions}
                  onChange={handleCarChange}
                />
              </div>

              <div className="btnboxs_wrapper">
                <button className="btn-boxs">Reset</button>
                <button className="btn-boxs">Done</button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
