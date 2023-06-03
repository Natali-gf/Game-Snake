import Apple from "./apple.js";
import Canvas from "./canvas.js";
import Score from "./score.js";
import Snake from "./snake.js";
import GameCycle from "./gameCycle.js";
import Unicellular from "./Unicellular.js";

export default class Game {
	constructor(
		canvas,
		// canvasContainer, canvasClassName, canvasWidth, canvasHeight,
		currentScore, bestResult, startField, buttonRestart){
		this.buttonRestart = buttonRestart;

		// this.canvas = new Canvas(canvasContainer, canvasClassName, canvasWidth, canvasHeight);
		this.canvas = canvas;
		this._field = new Unicellular();
		// console.log(this.canvas.context);
		// console.log(this.canvas.canvas.width = 400);
		// console.log(this.canvas.canvasWidth);

		this.snake = new Snake();
		this.apple = new Apple(this.snake.tail, this._field.cizeCell);
		this.score = new Score(currentScore, bestResult);



		// console.log(this._field.cizeCell=40);

		this.gameCycle = new GameCycle(this.update.bind(this), this.draw.bind(this), startField);
		// this.canvas.create()
	}

	update(){
		// this.snake.rules(this.apple, this.score, this.canvas, this.field, this.resetGame.bind(this))
	}

	draw() {
		// this.canvas.context.clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height)
		this.canvas.context.clearRect(0, 0, this.canvas.canvasWidth, this.canvas.canvasHeight)
		//todo не перерисовывать яблоко если координаты те же
		this.apple.draw(this.canvas.context)
		// this.snake.draw(this.canvas.context)
	}

	resetGame(){

		if (this.score.score > this.score.bestScore ||
			!this.score.bestScore) {
			this.score.changeBestScore()
		}
		this.buttonRestart.style.display = 'flex';
		this.gameCycle.stop()
		this.restart()
	}

	restart(){
		this.buttonRestart.addEventListener("click", () => {
			this.buttonRestart.style.display = 'none';
			this.gameCycle.startField.style.display = 'flex'
			this.snake.startValues()
			this.apple.newApple()
			this.draw()
			this.score.resetScore()
		})
	}
	get cizeCell(){
		return this._field.cizeCell;
	}
}