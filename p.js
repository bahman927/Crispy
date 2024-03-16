
var pros_exist = false;
var pros = []
var ids=[]
// var advancedFormat = require('dayjs/plugin/advancedFormat')
// dayjs.extend(advancedFormat)
// console.log(dayjs().format('Q Do k kk X x'))

var hour = dayjs().format('hh a');
var curTime = dayjs().format('dddd, MMMM D[th]')
$('#currentDay').text(curTime)

var hourtot = document.querySelectorAll('div[id]');
for( var hour_id of hourtot) {
  ids.push(hour_id.id)
}
 
if (localStorage.getItem('pros')){
   pros = JSON.parse(localStorage.getItem('pros'))
   pros_exist = true;
  }
ids.forEach(hour_id=>{  
     console.log("hour_id = ", hour_id) 
      const parentDiv = document.getElementById(hour_id);
      var  textareaElement = parentDiv.querySelector('textarea.description');
      var buttonElement = parentDiv.querySelector('button');
      var hr = parentDiv.querySelector('.hour').innerHTML;
       
      getTimeStat(hr,parentDiv);
      if (pros_exist){
        pros.forEach( pro => {
            if( pro.hour === hour_id)  {
              textareaElement.innerHTML = pro.des;
            }
          })
      }
     
      buttonElement.addEventListener('click', function() {
          const descriptionValue = textareaElement.value; 
          var newdata = {
            hour: hour_id,
            des: descriptionValue
          }
          pros.push(newdata)
          localStorage.setItem('pros', JSON.stringify(pros));
         document.getElementById("showLine").innerHTML = `Appointment Added to localStorage`


});
})
 
function getTimeStat(time,parentDiv){
  var timeStat = '';
  var hr_am = time.substring(time.length - 2);
  var hr = parseInt(time.substring(0,time.length - 2))
  var hour = dayjs().hour()
  
  console.log(time, hr_am)

  if (hr_am === 'PM' && hr !== 12) {
     hr += 12;
  }

  console.log('hr = ',hr , 'hour = ', hour)

  if (hr === hour){
    timeStat = 'present';
  } else if (hr < hour) {
    timeStat = 'past';
  } else {
    timeStat= 'future';
  }
  if (parentDiv.classList.contains('past')) {
      parentDiv.classList.remove('past'); // Remove class 'a'
      parentDiv.classList.add(timeStat);    // Add class 'd'
  }
  if (parentDiv.classList.contains('present')) {
    parentDiv.classList.remove('present'); // Remove class 'a'
    parentDiv.classList.add(timeStat);    // Add class 'd'
  }
  if (parentDiv.classList.contains('future')) {
    parentDiv.classList.remove('future'); // Remove class 'a'
    parentDiv.classList.add(timeStat);    // Add class 'd'
  }
   
 

   
} 
