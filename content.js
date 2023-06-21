chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "getTimetable") {
    let timetable = {
      monday: getTimetableForDay('Monday'),
      tuesday: getTimetableForDay('Tuesday'),
      wednesday: getTimetableForDay('Wednesday'),
      thursday: getTimetableForDay('Thursday'),
      friday: getTimetableForDay('Friday')
    };
  
    console.log(timetable);
    sendResponse(timetable);
  }
  else if(request.action === "getAdditionalInfo"){
    let additionalinfo=getadditionalinfo();
    sendResponse({addinfo: additionalinfo});
  }
});

function getTimetableForDay(day) {
  let dayDiv = document.createElement('div');
  let dayData = document.getElementsByClassName('fc-view-container')[0]
                    .getElementsByClassName('fc-widget-content')[0]
                    .getElementsByClassName('fc-content-skeleton')[0]
                    .getElementsByTagName('td')[getDayIndex(day)]
                    .getElementsByTagName('a');
  let timeMap = {};

  for (let index = 0; index < dayData.length; index++) {
    const element = dayData[index];
    const time = element.getElementsByTagName('span')[0].innerHTML;
    const subject = element.getElementsByClassName('fc-title')[0].innerHTML;

    if (!timeMap[time]) {
      timeMap[time] = [];
    }

    timeMap[time].push(subject);
  }

  for (const time in timeMap) {
    const subjects = timeMap[time];
    let timeDiv = document.createElement('div');
    timeDiv.innerHTML = '<b>' + time + '</b>';
    timeDiv.style.textAlign = 'center';
    dayDiv.appendChild(timeDiv);

    for (let i = 0; i < subjects.length; i++) {
      let subjectDiv = document.createElement('div');
      subjectDiv.innerHTML = subjects[i];
      subjectDiv.style.textAlign = 'center';
      dayDiv.appendChild(subjectDiv);
    }

    let spacingDiv = document.createElement('div');
    spacingDiv.style.height = '20px';
    dayDiv.appendChild(spacingDiv);
  }

  return dayDiv.innerHTML;
}

function getDayIndex(day) {
  switch (day) {
    case 'Monday':
      return 1;
    case 'Tuesday':
      return 2;
    case 'Wednesday':
      return 3;
    case 'Thursday':
      return 4;
    case 'Friday':
      return 5;
    default:
      return -1;
    }
  }

  function getadditionalinfo() {
    let nameData = document.getElementsByClassName('user-panel')[0].getElementsByTagName('p')[0].innerHTML;
    let rollnum = document.getElementsByClassName('col-sm-4 col-lg-8 col-xs-4 col-md-4')[0].getElementsByTagName('b')[0].innerHTML;
    let branch =document.getElementsByClassName('row col-lg-12')[2].getElementsByClassName('col-lg-6')[0].getElementsByClassName('col-sm-4 col-lg-8 col-xs-4 col-md-4')[0].innerText;
  
    let additionalinfo = "Name: " + nameData + "\nRoll No.: " + rollnum + "\nDepartment: " + branch;
    return additionalinfo;
  }