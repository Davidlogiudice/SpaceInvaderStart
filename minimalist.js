"use strict";

window.onresize = coloredBox;

coloredBox();

function coloredBox() {
    //context of Inner
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.beginPath();
    context.fillStyle = "black";
    context.rect(50, 50, 300, 300, 0);
    context.fill();
    context.closePath();


    context.beginPath();
    context.fillStyle = "green";
    context.rect(50, 50, 50, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(300, 50, 50, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(100, 100, 50, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(250, 100, 50, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(150, 100, 100, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(250, 150, 50, 100, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(100, 150, 50, 100, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(150, 250, 100, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(50, 300, 100, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(250, 300, 100, 50, 0);
    context.fill();
    context.closePath();

}