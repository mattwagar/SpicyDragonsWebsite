import Ember from 'ember';

export function mmddyy([dateStr]/*, hash*/) {

  var date = new Date(dateStr);

  var day = date.getDate();
  var monthIndex = date.getMonth() + 1;
  var year = date.getFullYear();
  var hour = date.getHours() === 0 ? 12 : date.getHours() > 11 ? date.getHours() - 12 : date.getHours(); 
  var minute = date.getMinutes() >= 10 ? date.getMinutes() : "0"+date.getMinutes();
  var meridian = date.getHours() <12 ? "am" : "pm"


  return monthIndex + '/' + day + '/' + year%2000 + " at " + hour+':'+minute + meridian;
}

export default Ember.Helper.helper(mmddyy);
