import { getRandomNumber } from "./helpers.js";

export default class Apple{
	constructor(snakeTail, cizeCell){
		this.snakeTail = snakeTail;
		this._cizeCell = cizeCell
		this.newApple()

		console.log(this._cizeCell =20);
	}

	draw(context){
		//todo
		const image = new Image();
		image.src = '../images/yellow-apple.svg';
		context.drawImage(image, this.xCoordinate, this.yCoordinate, this._cizeCell, this._cizeCell)

		// const render = () => {
		// 	context.drawImage(image, this.xCoordinate, this.yCoordinate, 50, 50)
		// }
		// image.onload = render;
	}

	newApple(){
		//todo
		// this._cizeCell = 20
		this.xCoordinate = getRandomNumber(0, 10) * this._cizeCell
		this.yCoordinate = getRandomNumber(0, 10) * this._cizeCell
console.log(this._cizeCell);
console.log(this.yCoordinate);
		this.snakeTail.forEach((elem) => {
			if(this.xCoordinate == elem.xCoordinate &&
				this.yCoordinate == elem.yCoordinate){
					this.xCoordinate = getRandomNumber(0, 10) * this._cizeCell
					this.yCoordinate = getRandomNumber(0, 10) * this._cizeCell
			}
		})
	}
	get cizeCell(){
		return this._sizeCell;
	}
}