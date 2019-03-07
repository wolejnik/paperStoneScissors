class Game {
    constructor() {

        this.draw = new Draw();
        this.result = new Result();
        
        const game = {
            playerChoice: null,
            computerChoice: null
        }

        this.hands = [...document.querySelectorAll('.select img')];
        document.getElementById('start').addEventListener('click', this.startGame.bind(this));
    }
dsaddscasdasd

    listenerImg() {
        this.hands.forEach(img => img.addEventListener('click', this.imgSelection.bind(this)));
    }


    startGame() {
        if (!game.playerChoice) {
            return alert('You must choice img');
        }
        game.computerChoice = this.hands[Math.floor(Math.random() * 3)].dataset.option;
        
        //const wonMoney = Result.moneyWinInGame(win, bid);
        let gameResult = this.result.checkResult(game.playerChoice, game.computerChoice);
        console.log(gameResult);
        
        this.result.publishResult(gameResult);
        
        document.querySelector(`[data-option="${game.playerChoice}"]`).style.boxShadow = "";
        game.playerChoice = "";
        game.computerChoice = "";
    }
}
