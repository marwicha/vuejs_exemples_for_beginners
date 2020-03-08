new Vue ({
    el: '#app',
    data: {

        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },

    methods: {
        startGame() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },

        attack() {
            this.monsterHealth -= this.calculateDamage(3, 10)

            if(this.checkWin()) {
                return;
            }
            
            this.playerHealth -= this.calculateDamage(3, 12)

            this.checkWin();

        },

        specialAttack() {

        },

        heal() {

        },

        giveUp() {

        },


        calculateDamage(min , max) {
             // GET A NUMBER BETWEEN 3 AND 10
           return Math.max(Math.floor(Math.random() * max ) + 1, min)
        },

        checkWin() {

            if (this.monsterHealth <= 0) {

                if(confirm('You won! : new Game ?')) {
                    this.startGame()
                }

                else {
                    this.gameIsRunning = false
                }

                return true;

            } else if (this.playerHealth <= 0) {

                if(confirm('You lost! : new Game ?')) {
                    this.startGame()
                }

                else {
                    this.gameIsRunning = false
                }
                return true
            }
            return false
        }
    }

})