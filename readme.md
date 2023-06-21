<h1>Project Title: Pingala Timetable Extractor</h1>
This Chrome extension extracts timetable data from the Pingala website, shows the timetable in its preview, notifies the user before each class, and displays additional relevant information. It comprises six core files, each of which performs a specific role in the extension's functionality.

<b>Files</b>
1.<b> manifest.json</b>
This is the metadata file in JSON format that contains properties like your extension's name, description, version number and so on. In essence, it explains what the extension is going to do, and what permissions it requires.

2.<b> content.js</b>
This is the content script, which has access to the current page and can manipulate its DOM. This script extracts the timetable and additional information from the Pingala website.

3.<b> popup.html</b>
This is the HTML file for the popup displayed when users click on the extension icon in the toolbar. It provides the user interface where the timetable and additional information are displayed.

4.<b> popup.js</b>
This is the JavaScript file for the popup. It handles interactions with the popup's HTML elements, such as responding to button clicks. This script retrieves the timetable and additional information from storage and updates the popup's UI accordingly.

5. <b>styles.css</b>
This is the Cascading Style Sheets (CSS) file for the popup. It handles all the styling aspects of the popup, making the user interface visually appealing and user-friendly.
<h4>Project Planning and Execution</h4>
<p>Day 1: Understanding and Requirements Gathering  - Before starting the project i did not have any prior knowlegde about html,js,or css  so i collected the resources of html js and css and some webscrapping throught extension part too and started learning and implementing that simultaneouslsy</p>
<p>Day 2: Designing Baic Strucuture & Find path to time table - on day 2 I started working on manifest.json and popup.html and html.css and i found logic to access time table data </p>
<p>Day 3: Wrote popup.js and content.js - I started giving functionality to buttons I used and started scrapping content from pingala</p>
<p>Day 4:Final Day Designing and Giving Storage Permission- On Final Day I worked on Design and learnt how to use storage api of chrome to store retrieved data but I was not able to complete and test <b>notification part</b>.</p>
I've Attached all files & images used in this repo.
