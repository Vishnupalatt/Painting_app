

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

ctx.fillStyle = "white"
ctx.fillRect(0,0,500,500)

ctx.fillStyle = "black"


let brushcolor = "black"
let brushsize = 3

document.getElementById("color").addEventListener("change",function(){
    brushcolor = this.value
})

document.getElementById("thickness").addEventListener("change",function(){
    brushsize = this.value
})

let painting = false

function paintingstart(e){
    painting = true
    draw(e)

}

function paintingend(e){
   painting = false
   ctx.beginPath()
}
function draw(e){
   if(painting==false) return
    let x = e.clientX
    let y = e.clientY - canvas.offsetTop

    ctx.lineWidth = brushsize
    ctx.lineCap = "round"
    ctx.lineTo(x,y)
    ctx.strokeStyle= brushcolor
    ctx.stroke()

}

canvas.addEventListener("mousedown",paintingstart)
canvas.addEventListener("mouseup",paintingend)
canvas.addEventListener("mousemove",draw)