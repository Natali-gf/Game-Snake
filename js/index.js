import Game from "./game.js";


const canvasContainer = document.getElementById('canvasContainer')
const currentScore = document.getElementById('score')
const bestResult = document.getElementById('bestResult')
const canvasClassName = 'canvas__field';
const startField = document.querySelector('.canvas__description')
const buttonRestart = document.querySelector('.canvas__button')
const canvasWidth = 500;
const canvasHeight = 500;

new Game(canvasContainer, canvasClassName, canvasWidth, canvasHeight, currentScore, bestResult, startField, buttonRestart)
