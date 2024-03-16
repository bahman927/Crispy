
 
var hour = dayjs().format('hh a');
var curTime = dayjs().format('dddd, MMMM D[th]')
$('#currentDay').text(curTime)
// divElements = document.querySelectorAll('div[id]');
// divElements.forEach(divElement => {
//      projects.push(divElement);

var divElements = [];
var projects = [];

var boxes = document.querySelectorAll('.time-block');
boxes.forEach(box => {
   var textareaEl = box.querySelector('.description');
  // Add an event listener to the textarea element
    textareaEl.addEventListener('input', function() {
      var text = textareaEl.value;
    //  text = event.target.value;
    // saveProjects(projects)
    
      // Log the textarea value to the console when input occurs
      console.log('Textarea value:', text); 
     })
    
    //box.setAttribute('style', 'background-color: yellow;');
  
    } ) 
    divElements = document.querySelectorAll('div[id]');
    divElements.forEach(divElement => {
     projects.push(divElement);
    })
    saveProjects(projects)
    readProjects()
    printProject()

// Get all div elements in the document which has id attribute

    //  console.log('outerHTML = ',divElement.outerHTML)
    // console.log(projects)
   

// // Loop through the NodeList and remove each element
function clearPage(boxes){
  boxes.forEach(element => {
  element.remove();
 });
}
 


   // equal to => $(document).ready(function()  This ensures that your JavaScript/jQuery code doesn't run until the entire HTML document is ready to be manipulated. 
   $(function () {  
  
 
});

function getTimeStat(){
      var hram = document.querySelector('.time-block').innerHTML;
      var hr_am = hram.substring(hram.length -2);
      var hr = parseInt(hram.substring(0,hram.length -2))
      var hour = dayjs().hour()

      if (hr_am == 'pm') {
         hr += 12;
      }

      if (hr === hour){
        timeStat = 'present';
      } else if (hr < hour) {
        timeStat = 'past';
      } else {
        timeStat= 'future';
      }
      return timeStat;
} 

function printProject(){
    var container = document.querySelector('.container-fluid');  
    projects.forEach((item) => { 
    var divElement = document.createElement('div');
    divElement.innerHTML = item.outerHTML;
    container.appendChild(divElement);
    //console.log(container);
   })
}
function readProjects() {
  var projects = localStorage.getItem('projects');
  if (projects) {
    projects = JSON.parse(projects);
  } else {
    projects = [];
  }
  return projects;
}


function saveProjects(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
  clearPage(boxes);
  var projects = readProjects();
}
 
// readProjects();


 // Get the parent div element by its ID
// const parentElement = document.getElementById('parentDiv');

// // Get all child elements with different IDs that belong to the parent element
// const childElements = parentElement.children;

// // Iterate over each child element to access its unique ID
// for (let i = 0; i < childElements.length; i++) {
//     // Access the unique ID of each child element
//     const uniqueID = childElements[i].id;

//     // Log the unique ID to the console (or perform other operations as needed)
//     console.log('Unique ID:', uniqueID);
// }

