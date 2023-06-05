import Speed from "./speed.js";

//! Подскажите best practice инициализации обьекта:
//! в конструкторе как я делала в других классах
//! или до написания класа, как я сделала здесь?

const speed = new Speed()

export default class GameCycle {
	constructor(update, draw){
		this.update = update;
		this.draw = draw;

		this.accelerateCycle = this.accelerateCycle.bind(this);
		this.movement = this.#movement.bind(this);
		this.setIntervalId;
	}

	start(){
		console.log(speed.speed);
		this.setIntervalId = setInterval(this.movement, speed.speed);
	}

	stop(){
		clearInterval(this.setIntervalId)
	}

	accelerateCycle(){
		speed.speed -= 20
		this.stop();
		this.start();
	}

	#movement() {
		this.update();
		this.draw();
	}
};
