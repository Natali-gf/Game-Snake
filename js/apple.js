import Canvas from "./canvas.js";
import { field } from "./gameData.js";
import { getRandomNumber } from "./helpers.js";

export default class Apple{
	constructor(canvas){
		this.xCoordinate = 50;
		this.yCoordinate = 0;
		this.canvas = canvas;
	}

	draw(context){
		// console.log(1);
		const image = new Image();
		image.src = '../images/yellow-apple.svg';
		context.drawImage(image, this.xCoordinate, this.yCoordinate, 50, 50)
	}

}