import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Calendar from "./Calendar/Calendar";
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentDate = new Date();
let day = currentDate.getDay();
let month = currentDate.getMonth();
let year = currentDate.getFullYear();
let date = `${month} ${day}, ${year}`;

export default function Home() {
  const [activeTrip, setactiveTrip] = useState("depart");
  const [restState, setrestState] = useState(false);
  const [dpDate, setDpDate] = useState();
  const [rtDate, setRtDate] = useState();
  const [totalDaysJourney, settotalDaysJourney] = useState();
  const [calendarValue, setCalendar] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const [totalYearMonth, settotalYearMonth] = useState([]);
  const [selectedYear, setSelectedYear] = useState();
  const [selectedMonth, setselectedMonth] = useState();

  useEffect(() => {
    setSelectedYear(calendarValue.year);
    setselectedMonth(months[calendarValue.month] + " " + calendarValue.year);
  }, []);

  const handleActiveTrip = (type) => {
    if (type === "dp") setactiveTrip("depart");
    else setactiveTrip("return");
  };

  const isTripActive = (type) => {
    if (activeTrip === type) return "active";
    else return "";
  };

  const handleReset = () => {
    setactiveTrip("depart");
    setrestState(true);
  };
  const MonthYearSelector = React.memo((props) => {
    const { twelveMonthsArray, selectedYear, selectedMonth } = props;

    const [filteredMonths, setFilteredMonths] = useState([]);

    // Populate the year select dropdown
    const populateYearSelect = () => {
      const uniqueYears = [
        ...new Set(
          twelveMonthsArray.map((month) => parseInt(month.split(" ")[1]))
        ),
      ];
      return (
        <Form.Select
          aria-label="Default select example"
          id="yearSelect"
          onChange={(e) => setSelectedYear(parseInt(e.target.value))}
          value={selectedYear || ""}
        >
          {/* <option value="">Select Year</option> */}
          {uniqueYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Form.Select>
      );
    };

    // Update months based on selected year
    useEffect(() => {
      if (selectedYear) {
        const monthsOfYear = twelveMonthsArray.filter(
          (month) => parseInt(month.split(" ")[1]) === selectedYear
        );
        setFilteredMonths(monthsOfYear);
      }
    }, [selectedYear, twelveMonthsArray]);

    // Display months select dropdown
    const displayMonthSelect = () => {
      return (
        <Form.Select
          aria-label="Default select example"
          id="monthSelect"
          disabled={!selectedYear}
          onChange={(e) => setselectedMonth(e.target.value)}
          value={selectedMonth || ""}
        >
          {/* <option value="">Select Month</option> */}
          {filteredMonths.map((month) => (
            <option key={month} value={month}>
              {month.split(" ")[0]}
            </option>
          ))}
        </Form.Select>
      );
    };

    return (
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        {displayMonthSelect()}
        {populateYearSelect()}
      </div>
    );
  });
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
                settotalYearMonth={settotalYearMonth}
                calendarValue={calendarValue}
                setCalendar={setCalendar}
                selectedYear={selectedYear}
                selectedMonth={selectedMonth}
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

              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                Current month:{" "}
                <MonthYearSelector
                  twelveMonthsArray={
                    totalYearMonth !== undefined && totalYearMonth
                  }
                  calendarValue={calendarValue}
                  setCalendar={setCalendar}
                  selectedYear={selectedYear}
                  selectedMonth={selectedMonth}
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
