var MouseEvenT = "empty";
var lastX, lastY;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "black";
var width = 3;
canvas.addEventListener("mousedown", mymouse_down);

function mymouse_down(e) {
    MouseEvenT = "mousedown";
    color = document.getElementById("color").value;
    width = document.getElementById("width_of_line").value;

}
canvas.addEventListener("mousemove", mymouse_move);

function mymouse_move(e) {
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    if (MouseEvenT == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }
    lastX = current_x;
    lastY = current_y;
}
canvas.addEventListener("mouseup", mymouse_up);

function mymouse_up(e) {
    MouseEvenT = "mouseup";
}
canvas.addEventListener("mouseleave", mymouse_leave);

function mymouse_leave(e) {
    MouseEvenT = "mouseleave";
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }