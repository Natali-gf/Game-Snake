import Unicellular from "./Unicellular.js";
import { getRandomNumber } from "./helpers.js";

export default class Apple extends Unicellular {
	constructor(snakeTail){
		super()
		this.snakeTail = snakeTail;
		this.newApple()
	}

	draw(context){
		const image = new Image();
		image.src = '../images/yellow-apple.svg';
		context.drawImage(image, this.xCoordinate, this.yCoordinate, this._sizeCell, this._sizeCell)
	}

	newApple(){
		this.xCoordinate = getRandomNumber(0, 10) * this._sizeCell
		this.yCoordinate = getRandomNumber(0, 10) * this._sizeCell

		for (let i = this.snakeTail.length - 1; i >= 0; i--){
			if (this.snakeTail[i].xCoordinate === this.xCoordinate &&
				this.snakeTail[i].yCoordinate === this.yCoordinate){
					this.xCoordinate = getRandomNumber(0, 10) * this._sizeCell;
					this.yCoordinate = getRandomNumber(0, 10) * this._sizeCell;
					i = this.snakeTail.length - 1;
			}
		};
	}
}