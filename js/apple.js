import Unicellular from "./Unicellular.js";
import { getRandomNumber } from "./helpers.js";

export default class Apple{
	constructor(snakeTail){
		this.snakeTail = snakeTail;
		this.field = new Unicellular();
		this.newApple()
	}

	draw(context){
		//todo
		const image = new Image();
		image.src = '../images/yellow-apple.svg';
		context.drawImage(image, this.xCoordinate, this.yCoordinate, this.field._sizeCell, this.field._sizeCell)

		// const render = () => {
		// 	context.drawImage(image, this.xCoordinate, this.yCoordinate, 50, 50)
		// }
		// image.onload = render;
	}

	newApple(){
		this.xCoordinate = getRandomNumber(0, 10) * this.field._sizeCell
		this.yCoordinate = getRandomNumber(0, 10) * this.field._sizeCell

		this.snakeTail.forEach((elem) => {
			if(this.xCoordinate == elem.xCoordinate &&
				this.yCoordinate == elem.yCoordinate){
					this.xCoordinate = getRandomNumber(0, 10) * this.field._sizeCell
					this.yCoordinate = getRandomNumber(0, 10) * this.field._sizeCell
			}
		})
	}
}