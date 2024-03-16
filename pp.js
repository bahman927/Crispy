var textarea = ""
var textContent = ""
var projects = [];
var ids = []

var hourtot = document.querySelectorAll('[id]');
for( var hour_id of hourtot) {
  ids.push(hour_id.id)
}

if (localStorage.getItem('projects')) {
    projects = JSON.parse(localStorage.getItem('projects'));
    if (projects !== null){
        renderData()
    } 
}

function addOrUpdateKeyValuePair(key, value) {
    let found = false;
    // Check if the key exists in the array
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].key === key) {
            // Update the value for the existing key
            projects[i].value = value;
            console.log(`Updated key-value pair for key '${key}': '${value}'`);
            found = true;
            break;
        }
    }

    // If the key doesn't exist, add a new key-value pair to the array
    if (!found) {
        projects.push({  key:key,  value:value });
        console.log(`Added new key-value pair for key '${key}': '${value}'`);

        localStorage.setItem('projects', JSON.stringify(projects));
        console.log(JSON.parse(localStorage.getItem('projects')));
    }
    
}


for( var hour_id of ids) {
     var parentDiv = document.getElementById(hour_id)
    var saveButton = parentDiv.querySelector('button');
    const parentDivId = saveButton.getAttribute('data-parent-div-id') 
    
    saveButton.addEventListener('click', function(){
        const relatedTextarea = parentDiv.querySelector('textarea.description');
        
        console.log(`button clicked with ID : ${parentDivId}`)
        textarea = relatedTextarea.value;
        
        if (textarea !== null) {
            
            addOrUpdateKeyValuePair(parentDivId, textarea);  
            console.log(`Content of related textarea: ${relatedTextarea.value}`)
        }
    })       
};
 //console.log(ids)
 function renderData(){
    ids.forEach(hour_id => {
       var parentDiv = document.getElementById(hour_id);
       var textareaContent = parentDiv.querySelector('textarea.description');
      console.log('textContent = ', textarea)
            projects.forEach( project => {
            // console.log('project.key = ' + project.key + ', ' +' hour_id = '+ hour_id)
            // console.log('project.value = '+ project.value)
              if( project.key === hour_id)  {
                textareaContent.innerHTML = project.value;
              }
            })
        })
    }
 
 

   
    
  
    
 

