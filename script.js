
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasHeight = canvas.height;
const canvasWidth = canvas.width;

class Rectangle{
    constructor(color){
        this.color = color;
        this.boxWidth = 50;
        this.boxHeight = 50;
        this.posX = Math.random() * (canvas.width - this.boxWidth);
        this.posY = Math.random() * (canvas.height - this.boxHeight); 
        this.dirX = 1;
        this.dirY = 1; 
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX, this.posY, this.boxWidth, this.boxHeight);
        this.posX += this.dirX;
        this.posY += this.dirY;
        this.boxWidth += this.dirX;
        this.boxHeight += this.dirY;
        if (this.posX + this.boxWidth > canvas.width || this.posX < 0)
            this.dirX = -this.dirX;
        if (this.posY + this.boxHeight > canvas.height || this.posY < 0)
            this.dirY = -this.dirY;
    }
}

ctx.fillStyle = 'black';

let posX = 0, posY = 0, dirX = 1, dirY = 1, boxWidth = 50, boxHeight = 50;
// ctx.clearRect(0, 0, canvas.width, canvas.height);
// ctx.fillRect(posX, posY, boxWidth, boxHeight);
let rect1 = new Rectangle('black');
let rect2 = new Rectangle('red');
let rect3 = new Rectangle('blue');



setInterval(function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rect1.draw(ctx);
    rect2.draw(ctx);
    rect3.draw(ctx);
}, 1);
