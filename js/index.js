import Game from "./game.js";
import Canvas from "./canvas.js";

const canvasContainer = document.getElementById('canvasContainer')
const currentScore = document.getElementById('score')
const bestResult = document.getElementById('bestResult')
const canvasClassName = 'canvas__field';
const startField = document.querySelector('.canvas__description')
const buttonRestart = document.querySelector('.canvas__button')
const speedSettings = document.querySelector('.settings__speed')
const speedMenu = document.querySelector('.speed__choice')
const speedConstant = document.getElementById('speedConstant');
const restartWithSettings = document.querySelector('.speed__button')
const canvasWidth = 500;
const canvasHeight = 500;

speedSettings.addEventListener("click", () => speedMenu.classList.toggle('flex'))

const canvas = new Canvas(canvasContainer, canvasClassName, canvasWidth, canvasHeight);
const gameSnake = new Game(canvas, currentScore, bestResult, startField, buttonRestart, speedConstant)

restartWithSettings.addEventListener("click", () => gameSnake.resetGame())
