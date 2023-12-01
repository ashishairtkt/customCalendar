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
export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDateNext, setSelectedDateNext] = useState();
  const [currentMonthdates, setcurrentMonthDates] = useState([]);
  const [NextMonthdates, setNextMonthdates] = useState([]);
  const [calendarValue, setCalendar] = useState({
    month: selectedDate.getMonth(),
    year: selectedDate.getFullYear(),
  });
  const [calendarValueNext, setCalendarNext] = useState();

  const activeDate = (date) => {
    if (getFormattedDate(date.date) === getFormattedDate(selectedDate)) {
      return "active";
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
    const body = {
      month: calendarValue.month,
      year: calendarValue.year,
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
  }, []);

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
    console.log(currentDate.getMonth(), calendarValueNext.month);

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
    console.log(
      currentDate.getMonth(),
      calendarValue,
      currentDate.getFullYear()
    );
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
    setSelectedDate(new Date(date.date));
  };

  const handleSelectMonth = (selectedMonth) => {
    const body = {
      month: months.indexOf(selectedMonth),
      year: calendarValue.year,
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
  };

  const isCurrentDateActive = (crdate) => {
    let currentDate = new Date();
    let activeDate = new Date(crdate.date);

    // Set both dates to the same day for accurate comparison
    currentDate.setHours(0, 0, 0, 0);
    activeDate.setHours(0, 0, 0, 0);

    if (currentDate.getTime() === activeDate.getTime()) {
      return "activedate";
    } else return "";
  };


  console.log(selectedDate,"selectedDate")
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
                                <td key={JSON.stringify(each)}>
                                  <div
                                    onClick={() => onSelectDate(each)}
                                    className={`dates ${isActivemonthDays(
                                      each
                                    )}${isCurrentDateActive(each)}  `}
                                  >
                                    <span className={`${activeDate(each)}`}>
                                      {each.day}
                                    </span>
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
                                <td key={JSON.stringify(each)}>
                                  <div
                                    onClick={() => onSelectDate(each)}
                                    className={`dates ${isActivemonthDays(
                                      each
                                    )}`}
                                  >
                                    <span className={`${activeDate(each)}`}>
                                      {each.day}
                                    </span>
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
