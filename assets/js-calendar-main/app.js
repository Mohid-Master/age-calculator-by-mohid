let calendar_array = document.querySelectorAll(".calendar");
// let calendar_1 = calendar_array[0];
// let calendar_2 = calendar_array[1];
// calendar = document.querySelector(".calendar");
date_array = [];
const month_names = [
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
isLeapYear = (year) => {
  return (
    (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};
getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28;
};

generateCalendar = (month, year, calendar, index_of_calender, month_picker) => {
  let calendar_days = calendar.querySelector(".calendar-days");
  let calendar_header_year = calendar.querySelector("#year");
  let days_of_month = [
    31,
    getFebDays(year),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  calendar_days.innerHTML = "";
  let currDate = new Date();
  if (!month && month != 0) month = currDate.getMonth();
  if (!year) year = currDate.getFullYear();
  let curr_month = `${month_names[month]}`;
  month_picker.innerHTML = curr_month;
  calendar_header_year.innerHTML = year;
  let date_selected;
  // get first day of month
  let first_day = new Date(year, month, 1);
  //   console.log(first_day.getDay());
  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
    let day = document.createElement("div");
    if (i >= first_day.getDay()) {
      day.classList.add("calendar-day-hover");
      day.addEventListener("click", () => {
        if (calendar.querySelectorAll(".calendar-days div")) {
          let calendar_days = calendar.querySelectorAll(".calendar-days div");
          calendar_days.forEach((e) => {
            if (e.classList.contains("curr-date")) {
              e.classList.remove("curr-date");
            }
          });
        }
        day.classList.add("curr-date");
        date_selected = day.innerHTML;
        obj_maker(date_selected, curr_month, year, index_of_calender);
      });

      day.innerHTML = i - first_day.getDay() + 1;
      if (
        i - first_day.getDay() + 1 ===
        currDate.getDate()
        // &&
        // year === currDate.getFullYear() &&
        // month === currDate.getMonth()
      ) {
        day.classList.add("curr-date");
        // date_selected = i - 1;
      }
    }
    calendar_days.appendChild(day);
    // wait(i, first_day, curr_month, year);
  }
  obj_maker(date_selected, curr_month, year, index_of_calender);
};
date_object = null;
function obj_maker(
  date_selected = new Date().getDate(),
  curr_month,
  year,
  index_of_calender
) {
  date_object = { month: curr_month, year: year, date: date_selected,calendar:calendar_array[index_of_calender] };
  if (date_array.length==0) {
      date_array[0] = date_object;
  date_array[1] = date_object;
  }

  date_array[index_of_calender] = date_object;
}
// function wait(i, first_day, month, year) {
//   let calendar_days = document.querySelectorAll(".calendar-days div");
//   //   let selected_date;
//   // calendar_days.forEach((e) => {
//   //   e.addEventListener("click", () => {
//   //     calendar_days.forEach((e) => {
//   //       if (e.classList.contains("curr-date")) {
//   //         e.classList.remove("curr-date");
//   //       }
//   //     });
//   //     if (i >= first_day.getDay()) {
//   //       e.classList.add("curr-date");
//   //       selected_date = e.innerHTML;
//   //       obj_maker(selected_date, month, year);
//   //     }
//   //     //   date = selected_date;
//   //   });
//   // });
// }
calendar_array.forEach((calendar, index) => {
  let month_list = calendar.querySelector(".month-list");
  month_names.forEach((e, month_index) => {
    let month = document.createElement("div");
    month.innerHTML = `<div data-month="${month_index}">${e}</div>`;
    month.querySelector("div").onclick = () => {
      month_list.classList.remove("show");
      // curr_month.value = index;
      generateCalendar(
        month_index,
        curr_year.value,
        calendar_array[index],
        index,
        month_picker
      );
    };
    month_list.appendChild(month);
  });
  let month_picker = calendar.querySelector("#month-picker");
  month_picker.onclick = () => {
    month_list.classList.add("show");
  };
  let currDate = new Date();
  let curr_month = { value: currDate.getMonth() };
  let curr_year = { value: currDate.getFullYear() };

  generateCalendar(
    curr_month.value,
    curr_year.value,
    calendar,
    index,
    month_picker
  );

  function calendar_handler() {
    return (month_and_year_obj = generateCalendar());
    // document.querySelector("calender_1");
  }

  calendar.querySelector("#prev-year").onclick = () => {
    --curr_year.value;
    generateCalendar(
      curr_month.value,
      curr_year.value,
      calendar_array[index],
      index,
      month_picker
    );
  };

  calendar.querySelector("#next-year").onclick = () => {
    ++curr_year.value;
    generateCalendar(
      curr_month.value,
      curr_year.value,
      calendar_array[index],
      index,
      month_picker
    );
  };
});
// let dark_mode_toggle = document.querySelector('.dark-mode-switch')
// dark_mode_toggle.onclick = () => {
//     document.querySelector('body').classList.toggle('light')
//     document.querySelector('body').classList.toggle('dark')
// }

// function toggle_c2(calendar=calendar_2){
// generateCalendar = (month, year) => {
//   let calendar_days = calendar.querySelector(".calendar-days");
//   let calendar_header_year = calendar.querySelector("#year");
//   let days_of_month = [
//     31,
//     getFebDays(year),
//     31,
//     30,
//     31,
//     30,
//     31,
//     31,
//     30,
//     31,
//     30,
//     31,
//   ];
//   calendar_days.innerHTML = "";
//   let currDate = new Date();
//   if (!month && month != 0) month = currDate.getMonth();
//   if (!year) year = currDate.getFullYear();
//   let curr_month = `${month_names[month]}`;
//   month_picker.innerHTML = curr_month;
//   calendar_header_year.innerHTML = year;
//   let date_selected;
//   // get first day of month
//   let first_day = new Date(year, month, 1);
//   //   console.log(first_day.getDay());
//   for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
//     let day = document.createElement("div");
//     if (i >= first_day.getDay()) {
//       day.classList.add("calendar-day-hover");
//       day.innerHTML = i - first_day.getDay() + 1;
//       if (
//         i - first_day.getDay() + 1 ===
//         currDate.getDate()
//         // &&
//         // year === currDate.getFullYear() &&
//         // month === currDate.getMonth()
//       ) {
//         day.classList.add("curr-date");
//         date_selected = i - 1;
//       }
//     }
//     calendar_days.appendChild(day);
//     wait(i, first_day, curr_month, year);
//   }
//   obj_maker(date_selected, curr_month, year);
// };
// date_object = null;
// function obj_maker(date_selected, curr_month, year) {
//   date_object = obj = { month: curr_month, year: year, date: date_selected };
//   console.log(date_object);
// }
// function wait(i, first_day, month, year) {
//   let calendar_days = document.querySelectorAll(".calendar-days div");
//   //   let selected_date;
//   calendar_days.forEach((e) => {
//     e.addEventListener("click", () => {
//       calendar_days.forEach((e) => {
//         if (e.classList.contains("curr-date")) {
//           e.classList.remove("curr-date");
//         }
//       });
//       if (i >= first_day.getDay()) {
//         e.classList.add("curr-date");
//         selected_date = e.innerHTML;
//         obj_maker(selected_date, month, year);
//       }
//       //   date = selected_date;
//     });
//   });
// }
// let month_list = calendar.querySelector(".month-list");

// month_names.forEach((e, index) => {
//   let month = document.createElement("div");
//   month.innerHTML = `<div data-month="${index}">${e}</div>`;
//   month.querySelector("div").onclick = () => {
//     month_list.classList.remove("show");
//     // curr_month.value = index;
//     generateCalendar(index, curr_year.value);
//   };
//   month_list.appendChild(month);
// });
// let month_picker = calendar.querySelector("#month-picker");
// month_picker.onclick = () => {
//   month_list.classList.add("show");
// };
// let currDate = new Date();
// let curr_month = { value: currDate.getMonth() };
// let curr_year = { value: currDate.getFullYear() };

// generateCalendar(curr_month.value, curr_year.value);

// function calendar_handler() {
//   month_and_year_obj = generateCalendar();
//   document.querySelector("calender_1");
// }

// document.querySelector("#prev-year").onclick = () => {
//   --curr_year.value;
//   generateCalendar(curr_month.value, curr_year.value);
// };

// document.querySelector("#next-year").onclick = () => {
//   ++curr_year.value;
//   generateCalendar(curr_month.value, curr_year.value);
// };

// // let dark_mode_toggle = document.querySelector('.dark-mode-switch')

// // dark_mode_toggle.onclick = () => {
// //     document.querySelector('body').classList.toggle('light')
// //     document.querySelector('body').classList.toggle('dark')
// // }
//
function toggle_calendar(index_of_calender) {
  if (calendar_array[index_of_calender].style.transform === "scale(0)") {
    calendar_array[index_of_calender].style.transform = "scale(.80)";
  } else {
    calendar_array[index_of_calender].style.transform = "scale(0)";
  }

  // return calendar_array[index_of_calender].classList.toggle("active")
}
input_container_array = document.querySelectorAll(".input_container");
function fill_inputs() {
  input_container_array.forEach(function (e,index){
    inp_array = e.querySelectorAll("input");
    // inp_array[0].setValue(date_array[index].date);
    inp_array[0].value=date_array[index].date;
    inp_array[1].value=month_names.indexOf(date_array[index].month) + 1,
    inp_array[2].value=date_array[index].year
    date = inp_array[0].value;
    month = inp_array[1].value;
    year = inp_array[2].value;
    console.log(e,index,inp_array);
  });
}
function get_and_verify_inp() {}
console.log(
  date_array[0].date,
  month_names.indexOf(date_array[0].month) + 1,
  date_array[0].year
);
fill_inputs();
date_array[0].calendar.querySelector(".curr-date").innerHTML
date_array[0].calendar.querySelector(".calendar-days").innerHTML
date_array[0].calendar.querySelector(".calendar-week-day").innerHTML
date_array[0].calendar.querySelector(".month-picker").innerHTML
date_array[0].calendar.querySelector("#year").innerHTML

