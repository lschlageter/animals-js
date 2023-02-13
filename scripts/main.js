const animal_buttons = document.getElementsByName("animal-button")

animal_buttons.forEach(button => {
   button.addEventListener("change", event => {
    //alert(button.value)
    text.innerHTML = "Here's a picture of a " + button.value
    photo.src = "../images/" + button.value + ".jpg"
   })
})

const text = document.querySelector("#text")
const photo = document.querySelector("#photo")

//function change_animal(animal) {
//   text.innerHTML = "Here's a picture of a " + animal + "."
//   photo.src = "../images/" + animal + ".jpg"
// }
 
// animal_buttons.forEach(button => {
//   button.addEventListener("change", event => {
//     change_animal(button.value)
//   })
// })