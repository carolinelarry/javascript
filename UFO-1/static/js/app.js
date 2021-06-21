// from data.js
var tableData = data;

//=========APPENDING DATA=========

//Reference to body of table to append
var tbody = d3.select("tbody");

tableData.forEach((date) => {
    var row = tbody.append("tr");
    Object.entries(date).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});




//===========FILTERING==========
//Select button
var filter_button = d3.select("#filter-btn");

//Select the input form
var input = d3.select(".filters");

//Event handlers
filter_button.on("click", runEnter);
input.on("submit", runEnter);

//Creating function
function runEnter() {
    
    //Prevent page from refreshing
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    //Get value of inputElement
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(date => date.datetime == inputValue);


    console.log(filteredData);

    tbody.html("");

    filteredData.forEach((date) => {
        var row = tbody.append("tr");
        Object.entries(date).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

   
};
