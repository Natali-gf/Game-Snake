export default class Score {
	constructor(currentScore, bestResult){
		this.score = 0;
		this.bestScore;
		this.localBestScore = localStorage.getItem('bestScore');

		this.currentScore = currentScore;
		this.bestResult = bestResult;
		currentScore.append(this.score);
		bestResult.append(this.bestScore);

		this.drawScore();
		this.checkLocalStorage()
	}

	checkLocalStorage(){
		if(this.localBestScore){
			this.bestScore = this.localBestScore
		}
		this.drawBestScore()
	}

	drawScore(){
		this.currentScore.innerHTML = this.score;
	}

	drawBestScore(){
		if (this.bestScore){
			this.bestResult.innerHTML = this.bestScore;
		} else {
			this.bestResult.innerHTML = '-';
		}
	}

	incScore(){
		this.score++;
		this.drawScore();
	}

	changeBestScore(){
		this.bestScore = this.score;
		localStorage.setItem('bestScore', this.score.toString())
		this.drawBestScore();
	}

	resetScore(){
		this.score = 0;
		this.drawScore();
	}
}