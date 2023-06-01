const game = [{
	field: {
		cell: 50,
		apple: 50,
	},
	snake: {
		tail: [],
		maxTailLength: 2,
		xCoordinate: 0,
		yCoordinate: 0,
		xWidth: fieldData.cell,
		yHeight: 0,
	},
	apple: {
		xCoordinate: 50,
		yCoordinate: 0,
	}
}]

export const field = game.field
export const snake = game.snake
export const apple = game.apple