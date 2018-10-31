import Ember from 'ember';

export function date([dateStr]/*, hash*/) {

  var date = new Date(dateStr);
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var dayStr = day%10 === 1 ? `${day}st` : day%10 === 2 ? `${day}nd` : `${day}th`;
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return monthNames[monthIndex] + ' ' + dayStr + ' ' + year;
}

export default Ember.Helper.helper(date);
