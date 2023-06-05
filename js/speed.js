export default class Speed {
	_speed = 500;

	// initialSpeed(){
	// 	this._speed = 500;
	// }

	get speed(){
		return this._speed;
	}
	set speed(speedUp){
		if(speedUp % 20 === 0) {
			this._speed = speedUp
			if(this._speed < 100){
				this._speed = 100;
			}
		} else {
			console.log('speed must be multiple of 20');
		}
	}
}