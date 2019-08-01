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

