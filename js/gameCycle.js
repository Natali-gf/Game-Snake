import Speed from "./speed.js";

//! Подскажите best practice инициализации обьекта:
//! в конструкторе как я делала в других классах
//! или до написания класа, как я сделала здесь?

// const speed = new Speed()

export default class GameCycle extends Speed {
	constructor(update, draw){
		super()
		this.update = update;
		this.draw = draw;

		this.accelerateCycle = this.accelerateCycle.bind(this);
		this.movement = this.#movement.bind(this);
		this.setIntervalId;
	}

	start(){
		console.log(this.speed);
		this.setIntervalId = setInterval(this.movement, this.speed);
	}

	stop(){
		clearInterval(this.setIntervalId)
	}

	accelerateCycle(){
		this.speed -= 20
		this.stop();
		this.start();
	}

	#movement() {
		this.update();
		this.draw();
	}
};
