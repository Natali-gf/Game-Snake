import Apple from "./apple.js";
import Canvas from "./canvas.js";
import Score from "./score.js";
import Snake from "./snake.js";
import GameField from "./gameField.js";
import FieldData from "./fieldData.js";
import { getRandomPosition } from "./helpers.js";

const canvasContainer = document.getElementById('canvasContainer')
const currentScore = document.getElementById('score')
const bestScore = document.getElementById('bestResult')
const canvasClassName = 'game-field';

class Game {
	constructor(container, canvasClassName, currentScore, bestScore){
		this.canvas = new Canvas(container, canvasClassName);
		this.apple = new Apple(this.canvas);
		this.snake = new Snake();
		this.score = new Score(currentScore, bestScore);
		this.field = new FieldData()
		new GameField( this.update.bind(this), this.draw.bind(this) )
	}

	update(){
		this.snake.rules(this.apple, this.score, this.canvas, this.field)
	}

	resetGame(){
		score = 0
		snake.tail = []
		snake.maxTailLength = 2
		snake.xCoordinate = 0
		snake.yCoordinate = 0
		snake.xWidth = 0
		snake.yHeight = 0
	}


	draw() {
		this.canvas.context.clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height)
		//todo не перерисовывать яблоко если координаты те же
		this.apple.draw(this.canvas.context)
		this.snake.draw(this.canvas.context)
	}
}

new Game(canvasContainer, canvasClassName, currentScore, bestScore)