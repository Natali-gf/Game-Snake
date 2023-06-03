import Unicellular from "./Unicellular.js";

export default class Snake {
	constructor(){
		this.field = new Unicellular()
		// this.xCoordinate = 200;
		// this.yCoordinate = 200;
		// this.xWidth = 50;
		// this.yHeight = 0;
		// this.maxTailLength = 2;
		// this.tail = [
		// 	{xCoordinate: 200, yCoordinate: 200},
		// 	{xCoordinate: 150, yCoordinate: 200}
		// ];
		this.startValues()
	}

	rules(apple, score, canvas, field, resetGame){
		//movement of snake
		this.xCoordinate += this.xWidth;
		this.yCoordinate += this.yHeight;
		//movement across the border of the canvas
		if (this.xCoordinate < 0){
			this.xCoordinate = canvas.canvas.width - 50
		} else if (this.xCoordinate >= canvas.canvas.width){
			this.xCoordinate = 0
		}
		if (this.yCoordinate < 0 ){
			this.yCoordinate = canvas.canvas.height - 50
		} else if (this.yCoordinate >= canvas.canvas.height ){
			this.yCoordinate = 0
		}
		//control of tail length
		this.tail.unshift({
			xCoordinate: this.xCoordinate,
			yCoordinate: this.yCoordinate
		})
		if (this.tail.length > this.maxTailLength) {
			this.tail.pop();
		}
		//increase snake tail and score + new apple
		if (this.xCoordinate === apple.xCoordinate && this.yCoordinate === apple.yCoordinate){
			this.maxTailLength++;
			score.incScore()
			apple.newApple(this.tail)
		}
		// checking tail's and apple's coordinates
		this.tail.forEach((elem, index) => {
			for (let i = index + 1; i < this.tail.length; i++){
				if (elem.xCoordinate === this.tail[i].xCoordinate &&
					elem.yCoordinate === this.tail[i].yCoordinate){
					resetGame()
				}
			}
		})
	}

	startValues(){
		this.xCoordinate = 200;
		this.yCoordinate = 200;
		this.xWidth = 50;
		this.yHeight = 0;
		this.maxTailLength = 2;
		this.tail = [
			{xCoordinate: 200, yCoordinate: 200},
			{xCoordinate: 150, yCoordinate: 200}
		];
	}

	//snake movement control
	control(){
		// console.log(this.field.sizeCell);
		document.addEventListener("keydown", (e) => {
			if (	e.code === 'KeyW' && this.yHeight == 0 ||
					e.code === 'ArrowUp' && this.yHeight == 0) {
				this.xWidth = 0;
				this.yHeight = -this.field.sizeCell;
			} else if(	e.code === 'KeyS' && this.yHeight == 0 ||
						e.code == 'ArrowDown' && this.yHeight == 0) {
				this.xWidth = 0;
				this.yHeight = +this.field.sizeCell;
			} else if(	e.code === 'KeyA' && this.xWidth == 0 ||
						e.code == 'ArrowLeft' && this.xWidth == 0) {
				this.yHeight = 0;
				this.xWidth = -this.field.sizeCell;
			} else if(	e.code === 'KeyD' && this.xWidth == 0 ||
						e.code == 'ArrowRight' && this.xWidth == 0){
				this.yHeight = 0;
				this.xWidth = +this.field.sizeCell;
			}
		})
	}

	draw(context){
	// snake tail
		this.tail.forEach((elem, index) => {
			context.fillStyle = '#f1e42c';
			context.strokeStyle = '#40490b'
			context.lineWidth = 5;
			if (index == 0) {
				context.fillRect(elem.xCoordinate, elem.yCoordinate, 50, 50)
				context.strokeRect(elem.xCoordinate+15, elem.yCoordinate+15, 20, 20);
				context.strokeRect(elem.xCoordinate, elem.yCoordinate, 50, 50);
			} else {
				context.fillRect(elem.xCoordinate, elem.yCoordinate, 50, 50)
				context.fillStyle = '#40490b'
				context.fillRect(elem.xCoordinate+20, elem.yCoordinate+20, 10, 10);
				context.strokeRect(elem.xCoordinate+15, elem.yCoordinate+15, 20, 20);
				context.strokeRect(elem.xCoordinate+7.5, elem.yCoordinate+7.5, 35, 35);
				context.strokeRect(elem.xCoordinate, elem.yCoordinate, 50, 50);
			}
		})
		this.control()
	}
}