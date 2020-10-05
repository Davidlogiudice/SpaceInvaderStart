"use strict";

window.onresize = spriteCharacter;

spriteCharacter();

//Sprite

function spriteCharacter() {
    //context of Inner
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.beginPath();
    context.fillStyle = "black";
    context.rect(75, 25, 300, 300, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "#00FF00";
    context.rect(150, 50, 150, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "#00FF00";
    context.rect(100, 100, 100, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "#00FF00";
    context.rect(250, 100, 100, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "#00FF00";
    context.rect(200, 150, 50, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "#00FF00";
    context.rect(100, 200, 50, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "#00FF00";
    context.rect(300, 200, 50, 50, 0);
    context.fill();
    context.closePath();


    context.beginPath();
    context.fillStyle = "#00FF00";
    context.rect(100, 250, 250, 50, 0);
    context.fill();
    context.closePath();

}