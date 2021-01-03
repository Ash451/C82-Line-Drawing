var canvas= document.getElementById("mycanvas")
var ctx=canvas.getContext("2d")
var color="blue"
var radius=50
var lastX,lastY,currentX,currentY

var checkEvent=""
canvas.addEventListener("mouseup",mu)
function mu(e){
console.log("Mouse has been lifted")
checkEvent="mouseUp"
}

canvas.addEventListener("mouseleave",ml)
function ml(e){
    console.log("Mouse Left the canvas.")
    checkEvent="mouseLeave"
}

canvas.addEventListener("mousedown",md)
function md(e){
    console.log("Mouse has been clicked")
    checkEvent="mouseDown"
    color=document.getElementById("colorinput").value
radius=document.getElementById("radiusinput").value
}
canvas.addEventListener("mousemove",mm)
function mm(e){
    console.log("Mouse is moving.")
    currentX=e.clientX-canvas.offsetLeft
    currentY=e.clientY-canvas.offsetTop
    if (checkEvent=="mouseDown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=4
        ctx.moveTo(lastX,lastY)
        ctx.lineTo(currentX,currentY)
        ctx.stroke()
    }
    lastX=currentX
    lastY=currentY
}
