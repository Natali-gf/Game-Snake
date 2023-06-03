export default class GameCycle {
	constructor(update, draw, startField){
		this.update = update;
		this.draw = draw;
		this.movement = this.movement.bind(this);
		// this.movement();
		this.start();
		this.startField = startField
		this.setIntervalId;
	}
	start(){
		document.addEventListener("click", (e) => {
			if (e.target === this.startField) {
				this.setIntervalId = setInterval(this.movement, 200);
				this.startField.style.display = 'none'
			}
		})
	}

	stop(){
		clearInterval(this.setIntervalId)
	}

	movement() {
		this.update();
		this.draw();
	}
};
