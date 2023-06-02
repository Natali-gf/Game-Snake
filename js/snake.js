import { field } from "./gameData.js";

export default class Snake {
	constructor(){
		this.tail = [];
		this.maxTailLength = 2;
		this.xCoordinate = 0;
		this.yCoordinate = 0;
		this.xWidth = field.cell;
		this.yHeight = 0;
	}

	update(apple, score, canvas){

	}
}