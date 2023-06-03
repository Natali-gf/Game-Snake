import Apple from "./apple.js";
import Canvas from "./canvas.js";
import Score from "./score.js";
import Snake from "./snake.js";
import GameCycle from "./gameCycle.js";
import Unicellular from "./Unicellular.js";

export default class Game {
	constructor(canvasContainer, canvasClassName, canvasWidth, canvasHeight, currentScore, bestResult, startField, buttonRestart){
		this.canvas = new Canvas(canvasContainer, canvasClassName, canvasWidth, canvasHeight);
		this.snake = new Snake();
		this.apple = new Apple(this.canvas, this.snake.tail);

		this.score = new Score(currentScore, bestResult);
		this.field = new Unicellular()
		this.buttonRestart = buttonRestart;
		this.gameCycle = new GameCycle( this.update.bind(this), this.draw.bind(this), startField )
	}

	update(){
		this.snake.rules(this.apple, this.score, this.canvas, this.field, this.resetGame.bind(this))
	}

	resetGame(){

		if (this.score.score > this.score.bestScore ||
			!this.score.bestScore) {
			this.score.changeBestScore()
		}
		this.buttonRestart.style.display = 'flex';
		// this.snake.startValues()
		this.gameCycle.stop()
		this.restart()
		console.log(333);
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

	draw() {
		this.canvas.context.clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height)
		//todo не перерисовывать яблоко если координаты те же
		this.apple.draw(this.canvas.context)
		this.snake.draw(this.canvas.context)
	}
}