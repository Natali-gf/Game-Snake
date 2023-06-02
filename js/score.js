export default class Score {
	constructor(currentScore, bestResult){
		this.score = 0;
		this.bestScore = 0;
		this.currentScore = currentScore;
		this.bestResult = bestResult;
		currentScore.append(this.score);
		bestResult.append(this.bestScore);
		this.draw();
		this.drawBestScore()
		console.log(bestResult);
	}

	draw(){
		this.currentScore.innerHTML = this.score;
	}

	drawBestScore(){
		this.bestResult.innerHTML = this.bestScore;
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
		this.bestResult = this.score;
		this.drawBestScore();
	}
}