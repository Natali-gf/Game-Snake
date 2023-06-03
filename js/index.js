import Game from "./game.js";
import Canvas from "./canvas.js";


const canvasContainer = document.getElementById('canvasContainer')
const currentScore = document.getElementById('score')
const bestResult = document.getElementById('bestResult')
const canvasClassName = 'canvas__field';
const startField = document.querySelector('.canvas__description')
const buttonRestart = document.querySelector('.canvas__button')
const canvasWidth = 500;
const canvasHeight = 500;

const canvas = new Canvas(canvasContainer, canvasClassName, canvasWidth, canvasHeight);
// canvas.create()
new Game(
	canvas,
	// canvasContainer, canvasClassName, canvasWidth, canvasHeight,
	currentScore, bestResult, startField, buttonRestart)
