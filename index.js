document.querySelectorAll(".drum")[0].addEventListener("click", function () {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    console.log("Hemshyam")
})
document.querySelectorAll(".drum")[1].addEventListener("click", function () {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    console.log("Hemshyam")
})
document.querySelectorAll(".drum")[2].addEventListener("click", function () {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    console.log("Hemshyam")
})
document.querySelectorAll(".drum")[3].addEventListener("click", function () {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    console.log("Hemshyam")
})
document.querySelectorAll(".drum")[4].addEventListener("click", function () {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    console.log("Hemshyam")
})
document.querySelectorAll(".drum")[5].addEventListener("click", function () {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    console.log("Hemshyam")
})
document.querySelectorAll(".drum")[6].addEventListener("click", function () {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    console.log("Hemshyam")
})
var audio1 = new Audio("sounds/Hey_Jude.mp3");
document.querySelectorAll(".song")[0].addEventListener("click", function () {

    if (audio1.paused) {
        audio1.play();
        audio2.pause();
        console.log("Playing")
    } else {
        audio1.pause();
        console.log("Paused")
    }
})
var audio2 = new Audio("sounds/Primus.mp3");
document.querySelectorAll(".song")[1].addEventListener("click", function () {

    if (audio2.paused) {
        audio2.play();
        audio1.pause();
        console.log("Playing")
    } else {
        audio2.pause();
        console.log("Paused")
    }
})




