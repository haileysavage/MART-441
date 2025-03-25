$(document).ready(function() {
    $.getJSON("data.json", function(data) {
        let output = "<ul>";

        data.forEach(function(crime) {
            output += `<li>${crime.category} - ${crime.location.street.name} - ${crime.month}</li>`;
        });

        output += "</ul>";
        $("#crime-data").html(output);
    }).fail(function() {
        console.log("Error loading JSON data.");
    });
});

  