export default class GameField {
	constructor(update, draw){
		this.sizeCell = 50;

		this.update = update;
		this.draw = draw;

		this.movement = this.movement.bind(this);
		// this.movement();
		this.start();
	}
	start(){
		setInterval(this.movement, 500);
	}

	movement() {

		this.update();
		this.draw();

	}
};
