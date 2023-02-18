const animal_buttons = document.getElementsByName("animal-button");

var randomBird = ["bird", "bird2", "bird3", "bird4", "bird5", "bird6", "bird7", "bird8", "bird9", "bird10"];
var randomCat = ["cat", "cat2", "cat3", "cat4", "cat5", "cat6", "cat7", "cat8", "cat9", "cat10",];
var randomHorse = ["horse", "horse2", "horse3", "horse4", "horse5", "horse6", "horse7", "horse8", "horse9", "horse10"];
var randomSheep = ["sheep", "sheep2", "sheep3", "sheep4", "sheep5", "sheep6", "sheep7", "sheep8", "sheep9", "sheep10"];

const text = document.querySelector("#text");
const photo = document.querySelector("#photo");

animal_buttons.forEach(button => { 
   button.addEventListener("change", event => {
      if (button.value == "bird") {
         var numBird = Math.floor(Math.random()*10); 
         text.innerHTML = "Here's a picture of a Bird!"
         photo.src = "../images/" + randomBird[numBird] + ".jpg"
      }
      else if (button.value == "cat") {
         var numCat = Math.floor(Math.random()*10); 
         text.innerHTML = "Here's a picture of a Cat!"
         photo.src = "../images/" + randomCat[numCat] + ".jpg"
      }
      else if (button.value == "horse") {
         var numHorse = Math.floor(Math.random()*10); 
         text.innerHTML = "Here's a picture of a Horse!"
         photo.src = "../images/" + randomHorse[numHorse] + ".jpg"
      }
      else if (button.value == "sheep") {
         var numSheep = Math.floor(Math.random()*10); 
         text.innerHTML = "Here's a picture of Sheep!"
         photo.src = "../images/" + randomSheep[numSheep] + ".jpg"
      }
      else {
         var number = Math.floor(Math.random()*10); 
         text.innerHTML = "Here's a picture of a " + button.value
         photo.src = "../images/" + button.value + ".jpg"
      }
   })
})

// tried to add a circle that would follow the mouse around the page but when I add this code
// it stops letting you click the buttons and the images don't show up anymore

//let circle = document.getElementById('circle');
//const onMouseMove = (e) =>{
//  circle.style.left = e.pageX + 'px';
//  circle.style.top = e.pageY + 'px';
//}
//document.addEventListener('mousemove', onMouseMove);