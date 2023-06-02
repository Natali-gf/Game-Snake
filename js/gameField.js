export default class GameField {
	constructor(update, draw){
		this.cell = 50;
		this.apple = 50;

		this.update = update;
		this.draw = draw;

		this.movement = this.movement.bind(this);
		this.movement();
	}

	movement() {
		// setInterval(this.movement, 2000);
		this.update();
		this.draw();
		// console.log(this.update);
	}
};

// setInterval(GameField.movement, 2000);