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

 var allData = [];
 var rowData = [];
var tbody = d3.select("tbody");
 

tableData.forEach(function(tableDataRow) {
    var rowData = [];
    console.log(tableDataRow);
    city.push(tableDataRow.city);
    comments.push(tableDataRow.comments);
    country.push(tableDataRow.country);
    datetime.push(tableDataRow.datetime);
    durationMinutes.push(tableDataRow.durationMinutes);
    shape.push(tableDataRow.shape);
    state.push(tableDataRow.state);

    rowData.push(tableDataRow.datetime);
    rowData.push(tableDataRow.city);
    rowData.push(tableDataRow.state);
    rowData.push(tableDataRow.country);
    rowData.push(tableDataRow.shape);
    rowData.push(tableDataRow.durationMinutes);
    rowData.push(tableDataRow.comments);
    allData.push(rowData);
  });

//console.log(tableData.length);
console.log(city);
console.log(comments);
console.log(country);
console.log(datetime);

console.log(durationMinutes);
console.log(shape);
console.log(state);
console.log("next");
console.log(allData);
console.log("above allData will be used to load html table");
console.log(city.length);
//worked: newTableData = tableData;
newTableData = tableData;
console.log(newTableData);
console.log("here 2");

// Iterate through each student/grade pair
allData.forEach(item => {
  
  console.log(item);
  var row = tbody.append("tr");

  // append one cell for the student and one cell for the grade
  row.append("td").text(item[0]);
  row.append("td").text(item[1]);
  row.append("td").text(item[2]);
  row.append("td").text(item[3]);
  row.append("td").text(item[4]);
  row.append("td").text(item[5]);
  row.append("td").text(item[6]);
  
});

console.log("here 3");

//test

var lists=[["A", 1], ["B, 2"], ["c", 3]];

console.log(lists);
console.log(lists.filter(list => list[0] === "A"));
var lists2 = lists.filter(list => list[0] === "A");
console.log("lists2 : " + lists2);

console.log("here 3b");

// end of test

console.log("here 3c");

var ufos = data;

// Select the button
var button = d3.select("#filter-btn");
var tbody2 = d3.select("tbody");
var choiceNames = ["#datetime", "#city", "#state", "#country", "#shape"]

button.on("click", function() {

  // Select the input element and get the raw HTML node

  var inputElement = d3.select("#datetime");
  //var inputElement = d3.select("#city");

  // Get the value property of the input element

  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(ufos);

  var filteredData = ufos.filter(ufo => ufo.datetime === inputValue);
 //var filteredData = ufos.filter(ufo => ufo.city === inputValue);

  console.log(filteredData);

  var tbody = d3.select("tbody");
  filteredData.forEach(item => {
    console.log("here 21");
    console.log("item: " + item);
    console.log("object keys: " + Object.keys(item));
    console.log("object values: " + Object.values(item));
    console.log("object entries: " + Object.entries(item));
    console.log("here 22");
    var row = tbody.append("tr");
  


    filteredData.forEach((item) => {
      Object.entries(item).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      //  console.log("key : " + key);
      //  console.log("value: " + value);
      });
    });
    
  });

});

console.log("here 20");