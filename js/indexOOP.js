import Apple from "./apple.js";
import Canvas from "./canvas.js";
import Score from "./score.js";
import Snake from "./snake.js";
import GameField from "./gameField.js";

class Game {
	constructor(){
		this.canvas = new Canvas();
		this.apple = new Apple(this.canvas);
		this.snake = new Snake();
		// this.score = new Score();

		new GameField( this.update.bind(this), this.draw.bind(this) )
	}

	update(){
		// console.log(this.update);
		this.snake.update(this.apple, this.score, this.canvas)
	}

	draw() {
		console.log(2);
		// console.log(this.canvas);
		this.canvas.context.clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height)
		// gameSnake.method();
		// console.log(this.apple);
		this.apple.draw(this.canvas.context)
		// console.log(1);
	}


}

const gameSnake = new Game()
// console.log(gameSnake.draw);
// const method = gameSnake.draw
// console.log(method);
// console.log(gameSnake);
// setInterval(gameSnake.update, 1000);