export default class Score {

	_score = 0;
	_bestScore;
	_localBestScore = localStorage.getItem('bestScore');

	constructor(currentScore, bestResult){
		// this.score = 0;
		// this.bestScore;
		// this.localBestScore = localStorage.getItem('bestScore');

		this.currentScore = currentScore;
		this.bestResult = bestResult;

		this.#create()
		this.drawScore();
		this.#checkLocalStorage()
	}

	#create(){
		this.currentScore.append(this._score);
		this.bestResult.append(this._bestScore);
	}


	#checkLocalStorage(){
		if(this._localBestScore){
			this._bestScore = this._localBestScore
		}
		this.drawBestScore()
	}

	drawScore(){
		this.currentScore.innerHTML = this._score;
	}

	drawBestScore(){
		if (this._bestScore){
			this.bestResult.innerHTML = this._bestScore;
		} else {
			this.bestResult.innerHTML = '-';
		}
	}

	incScore(){
		this._score++;
		this.drawScore();
	}

	changeBestScore(){
		this._bestScore = this._score;
		localStorage.setItem('bestScore', this._score.toString())
		this.drawBestScore();
	}

	resetScore(){
		this._score = 0;
		this.drawScore();
	}

	get score(){
		return this._score
	}
	get bestScore(){
		return this._bestScore
	}
	get localBestScore(){
		return this._localBestScore
	}
}