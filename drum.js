let divBtn = document.querySelector(".btns");
let buttons = Array.from(divBtn.getElementsByTagName("button"));
console.log(buttons)


let music = new Audio("drums/sounds/100\ Degrees\ Under\ -\ RAGE.mp3");
music.play();

let gamePlay = false;


let startGame = document.getElementById("start");
console.log(startGame);

startGame.getElementsByTagName("button")[0].addEventListener("click", () => {
    // startGame.style.margin = "5rem auto";
    startGame.style.display = "none";
    music.pause();

    for (let i = 0; i < sounds.length; i++) 
        buttons[i].addEventListener("click", () => sounds[i].play())
    


    addEventListener("keypress", (event) => {
        let name = event.key;
        specification(name);
    })
    
})

console.log(gamePlay);

let anumationSpot = document.getElementsByClassName("startGame")[0]

let sounds = [new Audio("drums/sounds/tom-1.mp3"), new Audio("drums/sounds/tom-2.mp3"),
new Audio("drums/sounds/tom-3.mp3"), new Audio("drums/sounds/tom-4.mp3"),
new Audio("drums/sounds/kick-bass.mp3"), new Audio("drums/sounds/crash.mp3"),
new Audio("drums/sounds/snare.mp3")]


specification = (event) => {
    switch (event) {
        case "w":
            sounds[0].play();
            break;
        case "a":
            sounds[1].play();
            break;
        case "s":
            sounds[2].play();
            break;
        case "d":
            sounds[3].play();
            break;
        case "j":
            sounds[4].play();
            break;
        case "k":
            sounds[5].play();
            break;
        case "l":
            sounds[6].play();
            break;

    }
}

/*

if (gamePlay) {
    for (let i = 0; i < sounds.length; i++) {
        buttons[i].addEventListener("click", () => sounds[i].play())
    }


    addEventListener("keypress", (event) => {
        let name = event.key;
        specification(name);
    })
}
*/

/*
let startGame = document.querySelector(".start").addEventListener("click",()=>{music.pause()
    music.currentTime = 0
})

*/

//Both are correct........
/*
firstButton.addEventListener("click",function (){
    alert("You enterd the first button");
});


firstButton.addEventListener("click",()=>{
    alert("You enterd the first button");
});
*/
