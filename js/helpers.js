export function getRandomNumber(min, max){
	return Math.floor(Math.random() * (max - min) + min)
}

// export function getRandomPosition(sizeCell){
// 	let x = getRandomNumber(0, 10) * sizeCell;
// 	let y = getRandomNumber(0, 10) * sizeCell;
// 	return { x: x, y: y}
// }