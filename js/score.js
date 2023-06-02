export default class Score {
	constructor(currentScore, bestScore){
		this.score = 0;
		this.bestScore = 0;
		currentScore.append(this.score);
		bestScore.append(this.bestScore);
		this.draw();
		this.drawBestScore()
	}

	draw(){
		// currentScore.innerHTML = this.score;
	}

	drawBestScore(){
		// bestScore.innerHTML = this.bestScore;
	}

	incScore(){
		this.score++;
		this.draw();
	}

	resetScore(){
		this.score = 0;
		this.draw();
	}

	changeBestScore(){
		this.bestScore = this.score;
		this.drawBestScore();
	}
}