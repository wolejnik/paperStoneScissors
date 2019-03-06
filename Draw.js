class Draw {
    constructor() {
        const game = {
            player: null,
            computer: null
        }

        this.images = [...document.querySelectorAll('.select img')];
        this.images.forEach(img => img.addEventListener('click', this.selectImgPlayer));

    }
    selectImgPlayer() {
        game.playerChoice = this.dataset.option;
        const boxPlayer = game.playerChoice;
        //this.images.style.boxShadow = ;
        //boxPlayer.style.boxShadow = '0 0 0 4px green';
    }
}

const draw = new Draw();