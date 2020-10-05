"use strict";

window.onresize = coloredBox;

coloredBox();

function coloredBox() {
    //context of Inner
    let canvas = document.querySelector("canvas");
    canvas.width = 300;
    canvas.height = 300;
    let context = canvas.getContext("2d");

    context.beginPath();
    context.fillStyle = "black";
    context.rect(50, 50, 300, 300, 0);
    context.fill();
    context.closePath();


    context.beginPath();
    context.fillStyle = "green";
    context.rect(50, 100, 50, 50, 0);
    context.fill();
    context.closePath();


    context.beginPath();
    context.fillStyle = "green";
    context.rect(50, 150, 50, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(100, 50, 50, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(150, 100, 50, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(150, 150, 300, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(400, 100, 50, 50, 0);
    context.fill();
    context.closePath();


    context.beginPath();
    context.fillStyle = "green";
    context.rect(450, 50, 50, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(500, 100, 50, 100, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(400, 200, 100, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(100, 200, 100, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(450, 250, 50, 250, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(100, 250, 50, 250, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(50, 250, 50, 200, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(500, 250, 50, 200, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(50, 400, 500, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(150, 500, 100, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(350, 500, 100, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(250, 350, 100, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(350, 250, 50, 100, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(200, 250, 50, 100, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(400, 350, 50, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(150, 350, 50, 50, 0);
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "green";
    context.rect(250, 200, 100, 50, 0);
    context.fill();
    context.closePath();


}