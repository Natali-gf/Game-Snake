import Apple from "./apple.js";
import Score from "./score.js";
import Snake from "./snake.js";
import GameCycle from "./gameCycle.js";

export default class Game {
	constructor(canvas, currentScore, bestResult, startField, buttonRestart, speedConstant){
		this.buttonRestart = buttonRestart;
		this.startField = startField
		this.canvas = canvas;
		this.speedConstant = speedConstant
		this.speedControl

		this.snake = new Snake();
		this.apple = new Apple(this.snake.tail);
		this.score = new Score(currentScore, bestResult);
		this.gameCycle = new GameCycle(this.update.bind(this), this.draw.bind(this), startField);

		this.subscribeToStart()
	}

	update(){
		this.snake.rules(this.apple, this.score, this.canvas, this.resetGame.bind(this))
		// this.snake.deathSnake(this.resetGame.bind(this), this.canvas.context)
		// this.snake.increaseSnake(this.apple, this.score,)

	}

	draw() {
		this.canvas.context.clearRect(0, 0, this.canvas.canvasWidth, this.canvas.canvasHeight)
		this.apple.draw(this.canvas.context)
		this.snake.draw(this.canvas.context, this.canvas)
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
		this.checkSpeedUser()
		this.buttonRestart.style.display = 'none';
		this.startField.style.display = 'flex';
		this.snake.startValues(this.checkSpeedUser())
		this.apple.newApple()
		this.draw()
		this.score.resetScore()
		})
	}

	subscribeToStart(){
		document.addEventListener("click", (e) => {
			if (e.target === this.startField) {
				this.gameCycle.start()
				this.startField.style.display = 'none'
			}
		})
		document.addEventListener("keydown", () => {
			console.log(this.startField.style.display);
			if(!this.startField.style.display ||
				this.startField.style.display === 'flex'){
				this.gameCycle.start()
				this.startField.style.display = 'none'
			}
		})
	}

	checkSpeedUser(){
		if (this.speedConstant.checked === false){
			return this.gameCycle.accelerateCycle
		}
	}
}