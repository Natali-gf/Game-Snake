// import { field } from "./gameData.js";

export default class Canvas {
	#canvas = document.createElement("canvas");
	_context = this.#canvas.getContext('2d');
	#container;
	constructor(container, className, width, height) {
		// this.#canvas = document.createElement("canvas");
		// this._context = this.#canvas.getContext('2d');
		this.#canvas.width = width;
		this.#canvas.height = height;
		this.#container = container
		this._className = className
		// container.append(this._canvas)
		// this._canvas.classList.add(className)
		this.#create()
	}

	#create(){
		this.#container.append(this.#canvas)
		this.#canvas.classList.add(this._className)
	}

	get context(){
		return this._context
	}
	get canvasWidth(){
		return this.#canvas.width
	}
	get canvasHeight(){
		return this.#canvas.height
	}
}