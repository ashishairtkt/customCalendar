import { useState, useEffect } from "react";
import { getCalendar } from "@skolacode/calendar-js";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
const months = [
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
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function getFormattedDate(dateString) {
  const options = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}
export default function Calendar(props) {

  const {totalDaysJourney,settotalDaysJourney}=props
  const [selectedDate, setSelectedDate] = useState();
  const [selectedDateNext, setSelectedDateNext] = useState();
  const [currentMonthdates, setcurrentMonthDates] = useState([]);
  const [NextMonthdates, setNextMonthdates] = useState([]);
  const [calendarValue, setCalendar] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const [calendarValueNext, setCalendarNext] = useState();


  useEffect(() => {
    if (props.restState) {
      setSelectedDate("");
      setSelectedDateNext("");
  
      setCalendar({
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
      });
 
      settotalDaysJourney(null);

      props.setrestState(false);
    }
  }, [props.restState]);

  function createDateFromString(dateString) {
    const monthAbbreviations = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dateParts = `${dateString}`.split(" ");
    const monthIndex = monthAbbreviations.indexOf(dateParts[1]);
    const year = parseInt(dateParts[3], 10);
    const day = parseInt(dateParts[2], 10);

    return new Date(year, monthIndex, day);
  }
  const activeDate = (date) => {
    if (getFormattedDate(date.date) === getFormattedDate(selectedDate)) {
      return "active";
    } else {
      return "";
    }
  };



  const isStartdp = (date) => {
    const currentdate = new Date(date.date);

    if (getFormattedDate(date.date) === getFormattedDate(selectedDate)) {
      if (
        getFormattedDate(selectedDate) === getFormattedDate(selectedDateNext)
      ) {
        return "dpstart";
      } else if (selectedDate !== undefined && selectedDateNext !== undefined&& selectedDateNext !== "") {
        return "dpstart startdp";
      }
    }
    if (getFormattedDate(date.date) === getFormattedDate(selectedDateNext)) {
      if (
        getFormattedDate(selectedDate) === getFormattedDate(selectedDateNext)
      ) {
        return "rtstart";
      } else if (selectedDate !== undefined && selectedDateNext !== undefined&& selectedDateNext !== "") {
        return "rtstart endrt";
      }
    } else if (
      new Date(selectedDate) < currentdate &&
      new Date(selectedDateNext) > currentdate
    ) {
      return "bgcolordate";
    } else {
      return "";
    }
  };

  const isactiveReturnDate = (date) => {
    if (getFormattedDate(date.date) === getFormattedDate(selectedDateNext)) {
      return "active_Return";
    } else {
      return "";
    }
  };

  const isActivemonthDays = (date) => {
    if (date.isCurrentMonth === false) {
      return "disableddate";
    } else {
      return "";
    }
  };

  useEffect(() => {
    if (selectedDate !== undefined) {
      props.setDpDate(formatDateArray(selectedDate));
    }

    if (selectedDateNext !== undefined) {
      props.setRtDate(formatDateArray(selectedDateNext));
    }
  }, [selectedDate, selectedDateNext, props.restState]);

  function formatDateArray(inputDate) {
    const date = new Date(inputDate); // Convert input string to a Date object
    const options = {
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options).split(" "); // Format date according to specified options and split into an array
    const outputArray = [
      formattedDate[0],
      formattedDate[1],
      formattedDate[2],
      formattedDate[3],
    ]; // Arrange in the required order
    return outputArray;
  }
  useEffect(() => {
    const body = {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    };

    const { calendar, month, next, previous, year } = getCalendar(
      body.month,
      body.year
    );

    setcurrentMonthDates([...calendar]);
    setCalendar({
      ...calendarValue,
      month,
      next,
      previous,
      year,
    });
  }, [props.restState]);

  useEffect(() => {
    if (calendarValue !== undefined && calendarValue.next !== undefined) {
      const bodynextMonth = {
        month: calendarValue.next.month,
        year: calendarValue.next.year,
      };
      const { calendar, month, next, previous, year } = getCalendar(
        bodynextMonth.month,
        bodynextMonth.year
      );

      setNextMonthdates([...calendar]);
      setCalendarNext({
        ...calendarValueNext,
        month,
        next,
        previous,
        year,
      });
    }
  }, [calendarValue]);

  const onClickNext = () => {
    let currentDate = new Date();

    if (currentDate.getMonth() - 1 > calendarValueNext.month) {
      const body = {
        month: calendarValue.next.month,
        year: calendarValue.next.year,
      };
      const { calendar, month, next, previous, year } = getCalendar(
        body.month,
        body.year
      );

      setcurrentMonthDates([...calendar]);

      setCalendar({
        ...calendarValue,
        month,
        next,
        previous,
        year,
      });
    }
  };

  const onClickPrevious = () => {
    let currentDate = new Date();

    if (
      (currentDate.getMonth() < calendarValue.month &&
        currentDate.getFullYear() === calendarValue.year) ||
      currentDate.getFullYear() < calendarValue.year
    ) {
      const body = {
        month: calendarValue.previous.month,
        year: calendarValue.previous.year,
      };
      const { calendar, month, next, previous, year } = getCalendar(
        body.month,
        body.year
      );

      setcurrentMonthDates([...calendar]);
      setCalendar({
        ...calendarValue,
        month,
        next,
        previous,
        year,
      });
    }
  };

  const onSelectDate = (date) => {
    onJourneyDays(date);
    if (props.activeTrip === "depart") {
      setSelectedDate(new Date(date.date));

      props.setactiveTrip("return");
    } else if (props.activeTrip === "return") {
      setSelectedDateNext(new Date(date.date));
    }
  };



  const isCurrentDateActive = (crdate) => {
    const currentDate = new Date(); // Get the current date

    // Convert the other date string to a Date object
    const dateParts = `${crdate.date}`.split(" ");
    const monthAbbreviations = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthIndex = monthAbbreviations.indexOf(dateParts[1]);
    const year = parseInt(dateParts[3], 10);
    const day = parseInt(dateParts[2], 10);
    const otherDateObj = new Date(year, monthIndex, day);
    const timeDifference = otherDateObj - currentDate;

    // Convert milliseconds to days
    const millisecondsInADay = 1000 * 60 * 60 * 24; // 1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
    const differenceInDays = Math.floor(timeDifference / millisecondsInADay);

    // Compare the dates
    if (currentDate.toDateString() === otherDateObj.toDateString()) {
      return "activedate";
    } else if (currentDate > otherDateObj) {
      return "disabledate";
    } else {
      return "";
    }
  };

  const onJourneyDays = (days) => {
    if (selectedDate !== undefined) {
      // Convert the other date string to a Date object
      const currentDate = createDateFromString(selectedDate);
      const otherDateObj = createDateFromString(days.date);

      const timeDifference = otherDateObj - currentDate;

      // Convert milliseconds to days
      const millisecondsInADay = 1000 * 60 * 60 * 24; // 1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
      const differenceInDays = Math.floor(timeDifference / millisecondsInADay);

      settotalDaysJourney([differenceInDays, days.date]);
    } else {
      settotalDaysJourney(null);
    }
  };

  return (
    <div className="calendar_wrapper">
      <div>
        <div>
          <div className="month_year">
            <div onClick={onClickPrevious} className="leftarrow">
              <FaAngleLeft />
            </div>

            <div>
              {months[calendarValue.month] && (
                <>
                  {months[calendarValue.month]},{calendarValue.year}
                </>
              )}
            </div>

            <div>
              {calendarValueNext && (
                <>
                  {months[calendarValueNext.month]},{calendarValueNext.year}
                </>
              )}
            </div>

            <div onClick={onClickNext} style={{}} className="rightarrow">
              <FaAngleRight />
            </div>
          </div>
          <div className="calendar_box_wrapper">
            <div className="calendar_boxone">
              <table>
                <tbody>
                  <tr className="days_wrapper">
                    {days.map((day) => (
                      <td key={day}>
                        <div className="week-day">{day}</div>
                      </td>
                    ))}
                  </tr>

                  {currentMonthdates.length > 0 &&
                    currentMonthdates.map((week) => (
                      <tr>
                        {week.map((each, index) => {
                          return days.map((day, indexone) => {
                            if (
                              each.isCurrentMonth === true &&
                              each.weekday.startsWith(day)
                            ) {
                              return (
                                <td
                                  key={JSON.stringify(each)}
                                  className={`${isStartdp(each)} `}
                                >
                                  <div className="dates_wrapper">
                                    <div
                                      onClick={() => onSelectDate(each)}
                                      // onMouseEnter={() => {
                                      //   onJourneyDays(each);
                                      // }}
                                      // onMouseLeave={() => {
                                      //   onJourneyDays(each);
                                      // }}
                                      className={`dates ${isActivemonthDays(
                                        each
                                      )}${isCurrentDateActive(each)}  `}
                                    >
                                      <span
                                        className={`${activeDate(
                                          each
                                        )} ${isactiveReturnDate(each)}`}
                                      >
                                        {each.day}
                                      </span>
                                    </div>
                                    {totalDaysJourney !== undefined &&
                                      totalDaysJourney !== null &&
                                      isactiveReturnDate(each) ===
                                        "active_Return" && (
                                        <font>
                                          {totalDaysJourney[0] === 0 ? (
                                            "Same day trip"
                                          ) : (
                                            <>
                                              {totalDaysJourney[0]}&nbsp;days
                                              trip
                                            </>
                                          )}
                                        </font>
                                      )}
                                  </div>
                                </td>
                              );
                            } else {
                              if (index === indexone)
                                return <td key={`empty-${day}`}></td>;
                            }
                          });
                        })}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div className="calendar_boxone">
              <table>
                <tbody>
                  <tr className="days_wrapper">
                    {days.map((day) => (
                      <td key={day}>
                        <div className="week-day">{day}</div>
                      </td>
                    ))}
                  </tr>

                  {NextMonthdates.length > 0 &&
                    NextMonthdates.map((week) => (
                      <tr>
                        {week.map((each, index) => {
                          return days.map((day, indexone) => {
                            if (
                              each.isCurrentMonth === true &&
                              each.weekday.startsWith(day)
                            ) {
                              return (
                                <td
                                  key={JSON.stringify(each)}
                                  className={`${isStartdp(each)}`}
                                >
                                  <div className="dates_wrapper">
                                    <div
                                      onClick={() => onSelectDate(each)}
                                      className={`dates ${isActivemonthDays(
                                        each
                                      )}`}
                                      // onMouseEnter={() => {
                                      //   onJourneyDays(each);
                                      // }}
                                      // onMouseLeave={() => {
                                      //   onJourneyDays(each);
                                      // }}
                                    >
                                      <span
                                        className={`${activeDate(
                                          each
                                        )} ${isactiveReturnDate(each)}`}
                                      >
                                        {each.day}
                                      </span>
                                    </div>
                                    {totalDaysJourney !== undefined &&
                                      totalDaysJourney !== null &&
                                      isactiveReturnDate(each) ===
                                        "active_Return" && (
                                        <font>
                                          {totalDaysJourney[0] === 0 ? (
                                            "Same day trip"
                                          ) : (
                                            <>
                                              {totalDaysJourney[0]}&nbsp;days
                                              trip
                                            </>
                                          )}
                                        </font>
                                      )}
                                  </div>
                                </td>
                              );
                            } else {
                              if (index === indexone)
                                return (
                                  <td
                                    key={`empty-${day}`}
                                    className="empty"
                                  ></td>
                                );
                            }
                          });
                        })}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ padding: 10 }}>
            Selected Date: {getFormattedDate(selectedDate)}
          </div>
        </div>
      </div>
    </div>
  );
}
