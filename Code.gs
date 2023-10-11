function main() {

  // Testing this C0DE and it is Working ... It means Library is Working :)
  var jsData = [{a:1,b:1,c:1},{a:1,b:2,c:1},{a:1,b:3,c:1}, {a:2,b:1,c:1}];
  var jsRes = alasql('SELECT a, COUNT(*) AS b FROM ? GROUP BY a', [jsData] );
  console.log(jsRes);

  let arr = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Marks").getRange("A1:E13").getValues();
  let headers = arr.shift();

  let data = arr.map(row => {
    let obj = {};
    row.forEach((cell, i) => {
      obj[headers[i]] = cell;
    }); // end of row.forEach((row, i) => {});
    return obj;
  }); // end of arr.map(row => {});

  let res = alasql('SELECT Student_ID, Maths, Geography, History, English FROM ?',[data]);
  console.log(res);

  let newRes = res.map(row => Object.keys(row).map(key => row[key]));
  newRes.unshift(Object.keys(res[0]));
  console.log(newRes);  

} // end of myFunction()
