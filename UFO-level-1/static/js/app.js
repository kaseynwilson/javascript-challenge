// from data.js
var tableData = data;

// YOUR CODE HERE!

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Iterate through each reported UFO sighting
tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the form 
var form = d3.select(".form-control");

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element 
    var inputValue = inputElement.property("value");

    // Select <tbody> and remove prior fields. 
    tbody.html("");

    // Set the span tag in the h1 element to the text that was entered in the form
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

     
    // Rebuild table with the filtered data. 
    filteredData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    //Print results to console
    console.log(filteredData);
};

