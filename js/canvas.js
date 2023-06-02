// import { field } from "./gameData.js";

export default class Canvas {
	constructor(container, className) {
		this.canvas = document.createElement("canvas");
		this.context = this.canvas.getContext('2d');
		this.canvas.width = 500;
		this.canvas.height = 500;
		container.append(this.canvas)
		this.canvas.classList.add(className)
	}
}