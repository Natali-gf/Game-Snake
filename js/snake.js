import Unicellular from "./Unicellular.js";

export default class Snake extends Unicellular {
	constructor(accelerateCycle){
		super()
		this.accelerateCycle = accelerateCycle
		this.startValues()
	}

	//starting position of the snake
	startValues(accelerateCycle){
		this.xCoordinate = 200;
		this.yCoordinate = 200;
		this.xWidth = this._sizeCell;
		this.yHeight = 0;
		this.maxTailLength = 2;
		this.tail = [
			{xCoordinate: 200, yCoordinate: 200},
			{xCoordinate: 150, yCoordinate: 200}
		];
		this.accelerateCycle = accelerateCycle;
	}

	draw(context){
	// snake tail
		this.tail.forEach((elem, index) => {
			context.fillStyle = '#f1e42c';
			context.strokeStyle = '#40490b'
			context.lineWidth = 5;
			if (index == 0) {
				context.fillRect(elem.xCoordinate, elem.yCoordinate, this._sizeCell, this._sizeCell)
				context.strokeRect(elem.xCoordinate+15, elem.yCoordinate+15, this._sizeCell-30, this._sizeCell-30);
				context.strokeRect(elem.xCoordinate, elem.yCoordinate, this._sizeCell, this._sizeCell);
			} else {
				context.fillRect(elem.xCoordinate, elem.yCoordinate, this._sizeCell, this._sizeCell)
				context.fillStyle = '#40490b'
				context.fillRect(elem.xCoordinate+20, elem.yCoordinate+20, this._sizeCell-40, this._sizeCell-40);
				context.strokeRect(elem.xCoordinate+15, elem.yCoordinate+15, this._sizeCell-30, this._sizeCell-30);
				context.strokeRect(elem.xCoordinate+7.5, elem.yCoordinate+7.5, this._sizeCell-15, this._sizeCell-15);
				context.strokeRect(elem.xCoordinate, elem.yCoordinate, this._sizeCell, this._sizeCell);
			}
		})
		this.#control()
	}

	//snake movement control
	#control(){
		document.addEventListener("keydown", (e) => {
			if (	e.code === 'KeyW' && this.yHeight == 0 ||
					e.code === 'ArrowUp' && this.yHeight == 0) {
						// console.log(1);
						// console.log(this.tail);
				this.xWidth = 0;
				this.yHeight = -this._sizeCell;
			} else if(	e.code === 'KeyS' && this.yHeight == 0 ||
						e.code == 'ArrowDown' && this.yHeight == 0) {
							// console.log(2);
							// console.log(this.tail);
				this.xWidth = 0;
				this.yHeight = +this._sizeCell;
			} else if(	e.code === 'KeyA' && this.xWidth == 0 ||
						e.code == 'ArrowLeft' && this.xWidth == 0) {
							// console.log(3);
							// console.log(this.tail);
				this.yHeight = 0;
				this.xWidth = -this._sizeCell;
			} else if(	e.code === 'KeyD' && this.xWidth == 0 ||
						e.code == 'ArrowRight' && this.xWidth == 0) {
							// console.log(4);
							// console.log(this.tail);
				this.yHeight = 0;
				this.xWidth = +this._sizeCell;
			}
		})
	}

	rules(apple, score, canvas, resetGame){
		//movement of snake
		this.xCoordinate += this.xWidth;
		this.yCoordinate += this.yHeight;
		//movement across the border of the canvas
		if (this.xCoordinate < 0){
			this.xCoordinate = canvas.canvasWidth - this._sizeCell
		} else if (this.xCoordinate >= canvas.canvasWidth){
			this.xCoordinate = 0
		}
		if (this.yCoordinate < 0 ){
			this.yCoordinate = canvas.canvasHeight - this._sizeCell
		} else if (this.yCoordinate >= canvas.canvasHeight ){
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
			score.incScore();
			apple.newApple(this.tail);
			if(this.accelerateCycle){
				this.accelerateCycle()
			}
		}
		// checking tail's coordinates
		this.tail.forEach((elem, index) => {
			for (let i = index + 3; i < this.tail.length; i++){
				if (elem.xCoordinate === this.tail[i].xCoordinate &&
					elem.yCoordinate === this.tail[i].yCoordinate){
						const image = new Image();
						image.src = '../images/death.svg';
						const render = () => {
							canvas.context.drawImage(image, this.xCoordinate-50, this.yCoordinate, 100, 100)
						}
						image.onload = render;
					resetGame()
				}
			}
		})
	}
}