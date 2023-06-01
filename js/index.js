const canvas = document.getElementById('gameField');
const context = canvas.getContext('2d');
const currentScore = document.getElementById('score');
const bestResult = document.getElementById('bestResult')
let score = 0;

const fieldData = {
	cell: 50,
	apple: 50,
}

const snake = {
	tail: [],
	maxTailLength: 2,
	xCoordinate: 0,
	yCoordinate: 0,
	xWidth: 0,
	yHeight: 0,
}

const apple = {
	xCoordinate: 50,
	yCoordinate: 0,
}

setInterval(game, 500)
function game(){
	context.clearRect(0, 0, canvas.width, canvas.height)
	drawСells()
	drawSnake();
	drawApple();
}

document.addEventListener("keydown", function(e){
	console.log(e.code);
	if(e.code === 'KeyW' && snake.yHeight == 0 || e.code === 'ArrowUp' && snake.yHeight == 0){
		console.log(1);
		snake.xWidth = 0;
		snake.yHeight = -fieldData.cell
	} else if(e.code === 'KeyS' && snake.yHeight == 0 || e.code == 'ArrowDown' && snake.yHeight == 0){
		console.log(2);
		snake.xWidth = 0;
		snake.yHeight = +fieldData.cell
	} else if(e.code === 'KeyA' && snake.xWidth == 0 || e.code == 'ArrowLeft' && snake.xWidth == 0){
		console.log(3);
		snake.yHeight = 0;
		snake.xWidth = -fieldData.cell
	} else if(e.code === 'KeyD' && snake.xWidth == 0 || e.code == 'ArrowRight' && snake.xWidth == 0){
		console.log(4);
		snake.yHeight = 0;
		snake.xWidth = +fieldData.cell
	}
})


function drawСells(){
	// context.beginPath();
	// context.fillStyle = '#909c8b';
	context.strokeStyle = '#909c8b';
	for (let x = 0; x<500; x = x + 50) {
		// context.fillRect(x, 0, 50, 50);
		context.strokeRect(x, 0, 50, 50);
		for(let y = 0; y < 500;){
		// context.fillRect(x, y, 50, 50);
		context.strokeRect(x, y, 50, 50);
		y = y + 50
		}
	}
	// context.closePath();
}



function getScore (){
	score++;
	currentScore.innerHTML = score
}

function getRandomNumber(min, max){
	return Math.floor(Math.random() * (max - min) + min)
}
// drawSnake()
function drawSnake(){
	snake.xCoordinate += snake.xWidth;
	snake.yCoordinate += snake.yHeight;
	borderCanvas()
	snake.tail.unshift({
		xCoordinate: snake.xCoordinate,
		yCoordinate: snake.yCoordinate
	})
	if (snake.tail.length > snake.maxTailLength) {
		snake.tail.pop();
	}
//* snake tail
	snake.tail.forEach(function(elem, index) {
		//tail of snake
		if (index == 0) {
			context.fillStyle = 'rgb(109, 158, 86)'
		} else {
			context.fillStyle = 'rgb(125, 161, 108)'
		}
		context.fillRect(elem.xCoordinate, elem.yCoordinate, fieldData.cell, fieldData.cell)

		//увеличение змейки и появление нового яблока
		if (elem.xCoordinate === apple.xCoordinate && elem.yCoordinate === apple.yCoordinate){
			snake.maxTailLength++;
			getScore()
			newApple()
		}
		for (let i = index + 1; i < snake.tail.length; i++){
			if (elem.xCoordinate === snake.tail[i].xCoordinate &&
				elem.yCoordinate === snake.tail[i].yCoordinate){
				resetGame()
			}
		}


	})
}
function resetGame (){
	score = 0
	snake.tail = []
	snake.maxTailLength = 2
	snake.xCoordinate = 0
	snake.yCoordinate = 0
	snake.xWidth = 0
	snake.yHeight = 0
}
function borderCanvas(){
	console.log(snake.xCoordinate);
	if (snake.xCoordinate < 0 ){
		snake.xCoordinate = canvas.width - fieldData.cell
	} else if (snake.xCoordinate >= canvas.width ){
		snake.xCoordinate = 0
	}
	if (snake.yCoordinate < 0 ){
		snake.yCoordinate = canvas.height - fieldData.cell
	} else if (snake.yCoordinate >= canvas.height ){
		snake.yCoordinate = 0
	}
}

function drawApple(){
	context.fillStyle = '#405735'
	context.fillRect(apple.xCoordinate, apple.yCoordinate, fieldData.cell, fieldData.cell)
}
function newApple(){
	snake.tail.forEach((elem) => {
		do{
			apple.xCoordinate = getRandomNumber(0, 10) * fieldData.cell
			apple.yCoordinate = getRandomNumber(0, 10) * fieldData.cell
		} while (apple.xCoordinate == elem.tx && apple.yCoordinate == elem.ty){
			apple.xCoordinate = getRandomNumber(0, 10) * fieldData.cell
			apple.yCoordinate = getRandomNumber(0, 10) * fieldData.cell
		}
	})
}

