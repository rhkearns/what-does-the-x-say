const foxImg = document.querySelector('#fox')
const foxSays = new Audio("../audio/fox.mp3")

console.log(foxImg)

foxImg.addEventListener("click", function(evt){
  foxSays.volume = .01
  foxSays.play()
})

// Add event listener to #notFox
// Listen for click and on a click:
  // Get the element id and use it to create an Audio element!
  // Play the audio element!

const notFoxImg = document.querySelector("#notFox")

notFoxImg.addEventListener("click", evt => {
  if (evt.target.id !== "notFox"){
    const audioElement = new Audio(`../audio/${evt.target.id}.mp3`)
    audioElement.volume = .1
    audioElement.play()
  }
})