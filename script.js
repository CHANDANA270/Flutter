function addReminder() {
    var day = document.getElementById("day").value;
    var time = document.getElementById("time").value;
    var activity = document.getElementById("activity").value;

    var reminderText = `On ${day} at ${time}: ${activity}`;
    var remindersList = document.getElementById("remindersList");
    
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(reminderText));
    remindersList.appendChild(listItem);
}
