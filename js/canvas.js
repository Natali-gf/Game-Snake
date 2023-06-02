// import { field } from "./gameData.js";

export default class Canvas {
	constructor() {
		this.canvas = document.createElement("canvas");
		this.context = this.canvas.getContext('2d');
		this.canvas.width = 500;
		this.canvas.height = 500;
		const container = document.getElementById('canvasContainer')
		container.append(this.canvas)
		this.canvas.classList.add('game-field')
	}
}
// const canvas = new Canvas();