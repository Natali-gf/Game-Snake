export function getRandomNumber(min, max){
	return Math.floor(Math.random() * (max - min) + min)
}

export function getRandomPosition(sizeCell){
	let x = getRandomNumber(0, 10) * sizeCell;
	let y = getRandomNumber(0, 10) * sizeCell;
	return { x: x, y: y}
	// snake.tail.forEach((elem) => {

		//!не подходит - яблоко на долю секунды появляется на змейке
		// do{
		// 	apple.xCoordinate = getRandomNumber(0, 10) * fieldData.cell
		// 	apple.yCoordinate = getRandomNumber(0, 10) * fieldData.cell
		// } while (apple.xCoordinate == elem.tx && apple.yCoordinate == elem.ty){
		// 	apple.xCoordinate = getRandomNumber(0, 10) * fieldData.cell
		// 	apple.yCoordinate = getRandomNumber(0, 10) * fieldData.cell
		// }
	// })
}