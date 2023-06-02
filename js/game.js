import Canvas from "./canvas";

class Game {
	constructor(container) {
		this.canvas = new Canvas(container)
	}
}

new Game(document.getElementById('canvasField'));