/* The function should return the names of those entries whose date is the current date. The names should be separated by a comma.

For example, here's an array of three entries and assume the date now is 2021-01-21.

[{ name: "Johny" , date: "2021-01-21T02:53:42+05:30" }, { name: "Sugar" , date: "2021-01-22T02:53:42+05:30" }, { name: "Sun" , date: "2021-01-21T03:53:42+05:30" }]

The function should return: ``` Johny,Sun ```. Please note that the names are separated by a comma without space.
*/

function todaysEntries(entries) {
  // Complete the function
  //Get todays date and stores in todaysDate
  td = new Date();
  todaysDate = td.getFullYear() + "-" + td.getMonth() + 1 + "-" + td.getDate();
  let nameArray = [];

  //Get date from the data logs
  for (let i = 0; i < entries.length; i++) {
    let newArray = entries[i].date;
    let ad = new Date(newArray);
    dateArray = ad.getFullYear() + "-" + ad.getMonth() + 1 + "-" + ad.getDate();
    //compares the date in data with todays date
    if (dateArray === todaysDate) {
      nameArray.push(entries[i].name);
    }
  }
  //returns the name in string format
  return nameArray.toString();
}

module.exports = todaysEntries;
