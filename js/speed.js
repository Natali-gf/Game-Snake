export default class Speed {
	constructor(){
		this._speed = 200;
	}

	get speed(){
		return this._speed;
	}
	set speed(speedUp){
		if(speedUp % 50 === 0) {
			this._speed = speedUp
		} else {
			console.log('speed must be multiple of 50');
		}
	}
}