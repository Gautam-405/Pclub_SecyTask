document.addEventListener('DOMContentLoaded', function() {
  var Button = document.getElementById('Btn');
  Button.addEventListener('click', function() {
    chrome.storage.local.get(['timetable'], function(result) {

      if (result.timetable) {
        // If timetable data is available, display it
        displayTimetable(result.timetable);
      } else {
        // If timetable data is not available, ask the content script to fetch it
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, { action: "getTimetable" }, function(response) {
            // Display the fetched timetable
            displayTimetable(response);

            // Store the timetable data for future use
            console.log(response);
            chrome.storage.local.set({ timetable: response}, function() {
              console.log("Timetable data stored.");
            });
          });
        });
      }
    });
  });

  var Button2 = document.getElementById('Bttn2');
  Button2.addEventListener('click', function() {
    chrome.storage.local.get(['addinfo'], function(result) {
      if(result.addinfo){
        alert("Additional Info:\n" + result.addinfo);
      }
      else{chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getAdditionalInfo" }, function(response) {
          alert("Additional Info:\n" + response.addinfo);

          chrome.storage.local.set({ addinfo: response.addinfo}, function() {
            console.log("Timetable data stored.");
          });
        });
      });
    };
  });
    
});
var Button1 = document.getElementById('Bttn1');
Button1.addEventListener('click', function() {
  chrome.storage.local.get(['timetable'], function(result) {
    if (result.timetable) {
      displayUpcomingClasses(result.timetable);
    } else {
      alert('No timetable data available.');
    }
  });
});
});
function displayTimetable(timetable) {
  document.getElementById('Monday').innerHTML = timetable.monday;
  document.getElementById('Tuesday').innerHTML = timetable.tuesday;
  document.getElementById('Wednesday').innerHTML = timetable.wednesday;
  document.getElementById('Thursday').innerHTML = timetable.thursday;
  document.getElementById('Friday').innerHTML = timetable.friday;
}

function displayUpcomingClasses(timetable){
  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var time=['6:00 -','7:00 -','8:00 -','9:00 -','10:00 -','11:00 -','12:00 -','1:00 -','2:00 -','3:00 -','4:00 -','5:00 -'];
    var currentDate = new Date();
    var currentDay = currentDate.getDay();
    var currentHour = currentDate.getHours();
    var currentMinutes = currentDate.getMinutes();

    var currentDayName = daysOfWeek[currentDay];
    var timetableOfDay = timetable[currentDayName];
    for (var i=0;i<time.length;i++){
      if (timetableOfDay.includes(time[i])){
        var classTime = time.substring(0, 4);
      var classHour = parseInt(classTime.split(':')[0]);

      if (classHour > currentHour || (classHour === currentHour && currentMinutes < 10)) {
        setNotification(classTime);
      }
      else{
        alert('No upcoming Class:)');
      }
    }
  }
}

function setNotification(classTime) {
  var notificationText = 'Upcoming class at ' + classTime;
  alert(notificationText);
}
      