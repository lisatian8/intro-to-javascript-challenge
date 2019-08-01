// from data.js
var tableData = data;

// YOUR CODE HERE!
//worked: 
//print('{tableData}');

//display on inspect console
//console.log('{tableData}');

//var cityList = []
//var 

//for (var i = 0; i < tableData.length; i++) {
 //   console.log(tableData[i]);
 // }

 var city=[];
 var comments=[];
 var country=[];
 var datetime=[];

 var durationMinutes=[];
 var shape=[];
 var state=[];

 var newTableData = {};



tableData.forEach(function(tableDataRow) {
    console.log(tableDataRow);
    city.push(tableDataRow.city);
    comments.push(tableDataRow.comments);
    country.push(tableDataRow.country);
    datetime.push(tableDataRow.datetime);
    durationMinutes.push(tableDataRow.durationMinutes);
    shape.push(tableDataRow.shape);
    state.push(tableDataRow.state);
  });

//console.log(tableData.length);
console.log(city);
console.log(comments);
console.log(country);
console.log(datetime);

console.log(durationMinutes);
console.log(shape);
console.log(state);

console.log(city.length);
//worked: newTableData = tableData;
newTableData = tableData;
console.log(newTableData);

var cityMapped = newTableData.map(newTableDataRow => newTableDataRow.city);
var datetimeMapped = newTableData.map(newTableDataRow => newTableDataRow.datetime);

console.log(cityMapped);
console.log(datetimeMapped);

// Create a custom filtering function
function selectCity(observation) {
  return observation.city === 'benton';
}

// filter() uses the custom function as its argument
var cityNewTableData= newTableData.filter(selectCity);

// Test
console.log(cityNewTableData);
