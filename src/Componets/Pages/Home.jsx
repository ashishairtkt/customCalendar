import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Calendar from "./Calendar/Calendar";

export default function Home() {
 

  const [activeTrip, setactiveTrip] = useState("depart");
  const [restState, setrestState] = useState(false);
  const [dpDate, setDpDate] = useState();
  const [rtDate, setRtDate] = useState();
  const [totalDaysJourney, settotalDaysJourney] = useState();

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

  const handleReset = () => {
    setactiveTrip("depart");
    setrestState(true);
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
                  {dpDate !== undefined && dpDate[2] !== undefined ? (
                    <>
                      {dpDate && dpDate[2].replace(/,/g, "")}
                      <span>
                        {dpDate && dpDate[1].replace(/,/g, "")}
                        <br />
                        {dpDate && dpDate[0].replace(/,/g, "")}
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
                  {rtDate !== undefined && rtDate[2] !== undefined ? (
                    <>
                      {" "}
                      {rtDate && rtDate[2].replace(/,/g, "")}
                      <span>
                        {rtDate && rtDate[1].replace(/,/g, "")}
                        <br />
                        {rtDate && rtDate[0].replace(/,/g, "")}
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
                restState={restState}
                setrestState={setrestState}
                settotalDaysJourney={settotalDaysJourney}
                totalDaysJourney={totalDaysJourney}
              />
            </div>

            <div className="bottom_section">
              <div className="bottom_tripname">
                {" "}
                {totalDaysJourney !== undefined &&
                  totalDaysJourney !== null &&
                  isNaN(totalDaysJourney) !== true && (
                    <font>
                      {totalDaysJourney === 0 ? (
                        "Same day trip"
                      ) : (
                        <>{totalDaysJourney}&nbsp;days trip</>
                      )}
                    </font>
                  )}
              </div>

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
                <button className="btn-boxs" onClick={() => handleReset()}>
                  Reset
                </button>
                <button className="btn-boxs">Done</button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
