/*------------------------------Constants----------------------------------------*/

const foxSays = new Audio("../audio/fox.mp3")



/*--------------------------------Variables--------------------------------------*/





/*--------------------------------Cached Elements--------------------------------*/

const foxImg = document.querySelector("#fox")
const notFoxImg = document.querySelector("#notFox")


/*------------------------------------Event Listeners----------------------------*/

foxImg.addEventListener('click', evt => {
   foxSays.volume = .10
   foxSays.play();
})

notFoxImg.addEventListener('click', evt => {
   if (evt.target.id !== "notFox") {
      const audioElement = new Audio(`../audio/${evt.target.id}.mp3`)
      audioElement.volume = .10
      audioElement.play()
   }
})


/*-----------------------------------Functions-----------------------------------*/