/**
 * Checks if the date asked is in last "days" 
 * @param {date} date 
 * @param {days } days - past number of days 
 */
export function checkDateIsInLast(date, days = 3) {
  // var today = new Date();
  var today = new Date("Sun Jan 14 2020 20:40:15 GMT-0800")
  var date2 = new Date(date);

  var time = days * 60 * 60 * 24 * 1000;
  if ((today.getTime() - date2.getTime()) < time && date2 < today) {
    return true;
  }
  return false;
}
