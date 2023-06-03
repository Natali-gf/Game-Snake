import Apple from "./apple.js";
import Score from "./score.js";
import Snake from "./snake.js";
import GameCycle from "./gameCycle.js";

export default class Game {
	constructor(canvas, currentScore, bestResult, startField, buttonRestart){
		this.buttonRestart = buttonRestart;
		this.canvas = canvas;

		this.snake = new Snake();
		this.apple = new Apple(this.snake.tail);
		this.score = new Score(currentScore, bestResult);
		this.gameCycle = new GameCycle(this.update.bind(this), this.draw.bind(this), startField);
	}

	update(){
		this.snake.rules(this.apple, this.score, this.canvas, this.resetGame.bind(this))
	}

	draw() {
		this.canvas.context.clearRect(0, 0, this.canvas.canvasWidth, this.canvas.canvasHeight)
		//todo не перерисовывать яблоко если координаты те же
		this.apple.draw(this.canvas.context)
		this.snake.draw(this.canvas.context)
	}

	resetGame(){

		if (this.score._score > this.score._bestScore ||
			!this.score._bestScore) {
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
}