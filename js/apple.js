import { getRandomNumber, getRandomPosition } from "./helpers.js";

export default class Apple{
	constructor(canvas, snakeTail){
		// this.canvas = canvas;
		this.snakeTail = snakeTail;
		this.newApple()
	}

	draw(context){
		// this.newApple()
		//todo
		const image = new Image();
		image.src = '../images/yellow-apple.svg';
		context.drawImage(image, this.xCoordinate, this.yCoordinate, 50, 50)

		// const render = () => {
		// 	context.drawImage(image, this.xCoordinate, this.yCoordinate, 50, 50)
		// }
		// image.onload = render;
	}

	newApple(){
		//todo
		this.xCoordinate = getRandomNumber(0, 10) * 50
		this.yCoordinate = getRandomNumber(0, 10) * 50

		this.snakeTail.forEach((elem, index) => {
			if(this.xCoordinate == elem.xCoordinate &&
				this.yCoordinate == elem.yCoordinate){
					this.xCoordinate = getRandomNumber(0, 10) * 50
					this.yCoordinate = getRandomNumber(0, 10) * 50
			}
		})
	}
}