import Canvas from "./canvas.js";
import { getRandomNumber, getRandomPosition } from "./helpers.js";

export default class Apple{
	constructor(canvas){
		this.xCoordinate = 0;
		this.yCoordinate = 0;
		this.canvas = canvas;
		this.newApple()
	}

	draw(context){
		//todo
		const image = new Image();
		image.src = '../images/yellow-apple.svg';
		// context.drawImage(image, this.xCoordinate, this.yCoordinate, 50, 50)

		const render = () => {
			context.drawImage(image, this.xCoordinate, this.yCoordinate, 50, 50)
		}
		image.onload = render;

	}

	newApple(){
		//todo
		this.xCoordinate = getRandomNumber(0, 10) * 50
		this.yCoordinate = getRandomNumber(0, 10) * 50
	}
}