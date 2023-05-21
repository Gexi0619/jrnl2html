// Get the timeline container
var timelineContainer = document.getElementById("timeline");

// Initiate an AJAX request to get JSON data
var xhr = new XMLHttpRequest();
xhr.open('GET', 'myjournal.json', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Parse the JSON data
    var jsonData = JSON.parse(xhr.responseText);

    // Iterate over the JSON data and create timeline entries
    jsonData.entries.sort(function(a, b) {
      // Combine the date and time, convert to timestamp for comparison
      var dateTimeA = new Date(a.date + ' ' + a.time).getTime();
      var dateTimeB = new Date(b.date + ' ' + b.time).getTime();
      // Sort by time from newest to oldest
      return dateTimeB - dateTimeA;
    }).forEach(function(entry) {
      // Create HTML element for timeline entry
      var listItem = document.createElement("li");
      listItem.className = "timeline-item";

      // Build the content for the timeline entry
      var content = "<h3>" + entry.title + "</h3>";
      content += "<p>" + entry.date + " " + entry.time + "</p>";
      content += "<p>" + entry.body + "</p>"; // Add the body content

      // Add the content to the timeline entry
      listItem.innerHTML = content;

      // Add the timeline entry to the timeline container
      timelineContainer.appendChild(listItem);
    });
  }
};
xhr.send();
