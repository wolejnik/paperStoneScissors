class Result {

    gameSummary = {
        numbers: 0,
        win: 0,
        lose: 0,
        draw: 0
    }

    constructor() {
        this.publishScore = document.querySelector('[data-summary="who-win"]');


    }
    checkResult(player, com) {
        if (player === com) {
            return 'draw';
        } else if (player === 'paper' && com === 'stone') {
            return 'win';
        } else if (player === 'stone' && com === 'scissors') {
            return 'win';
        } else if (player === 'scissors' && com === 'paper') {
            return 'win';
        } else {
            return 'lose';
        }
    }

    publishResult(score) {
        const publishChoicePlayer = document.querySelector('[data-summary="your-choice"]');
        publishChoicePlayer.textContent = game.playerChoice;

        const publishChoiceComputer = document.querySelector('[data-summary="ai-choice"]');
        publishChoiceComputer.textContent = game.computerChoice;

        this.gameSummary.numbers++;

        if (score === 'win') {
            this.gameSummary.win++;
            this.publishScore.textContent = 'You Win 🏆';
            this.publishScore.style.color = 'green';
        } else if (score === 'lose') {
            this.gameSummary.lose++;
            this.publishScore.textContent = 'Computer win 💩';
            this.publishScore.style.color = 'red';
        } else if (score === 'draw') {
            this.gameSummary.draw++;
            this.publishScore.textContent = 'Draw 🍎';
            this.publishScore.style.color = 'yellow';
        }

        document.querySelector('p.numbers span').textContent = this.gameSummary.numbers;
        document.querySelector('p.wins span').textContent = this.gameSummary.win;
        document.querySelector('p.losses span').textContent = this.gameSummary.lose;
        document.querySelector('p.draws span').textContent = this.gameSummary.draw;
    }

    renderResult(game) {

    }
}