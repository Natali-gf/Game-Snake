// import { field } from "./gameData.js";

export default class Canvas {
	constructor(container, className, width, height) {
		this.canvas = document.createElement("canvas");
		this.context = this.canvas.getContext('2d');
		this.canvas.width = width;
		this.canvas.height = height;
		container.append(this.canvas)
		this.canvas.classList.add(className)
	}
}