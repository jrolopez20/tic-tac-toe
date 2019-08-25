<template>
    <div class="container">
        <div class="row">
            <div class="col-md-9">
                <board :squares="current" @click="handleClick" :winnerLine="winnerLine"></board>
                <div class="status" v-html="status"></div>
            </div>
            <div class="col-md-3">
                <h3>Jugadas
                    <span class="text-right float-right">
                    <a href="#" class="text-light" @click="prevMove" v-if="stepNumber>0"><i
                            class="fas fa-arrow-alt-circle-left"></i></a>
                    <a href="#" class="text-light" @click="nextMove" v-if="(history.length - (stepNumber+1)) > 0"><i
                            class="fas fa-arrow-alt-circle-right"></i></a>
                    </span>
                </h3>
                <ol class="ml-0 pl-0">
                    <li class="move btn btn-xl btn-outline-light" v-for="(move, index) in history"
                        @click="jumpTo(index)"
                        :class="{ active: index === stepNumber }">
                        <span v-if="!index">Inicio</span>
                        <span v-else>Ir a la jugada {{index}}</span>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
  import Board from './Board.vue'

  export default {
    name: 'game',
    components: {Board},
    data() {
      return {
        history: [{
          squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true,
        winnerLine: Array(3).fill(null)
      }
    },
    computed: {
      current: function () {
        const history = this.history;
        return history[this.stepNumber].squares;
      },
      status: function () {
        const history = this.history;
        const current = history[this.stepNumber];
        const winner = this.calculateWinner(current.squares);

        let message;
        if (winner) {
          message = 'Ganador: ' + winner;
        } else {
          if (this.stepNumber == 9) {
            message = 'Ha habido un empate'
          } else {
            message = 'Siguiente jugador: ' + (this.xIsNext ? 'X' : 'O');
          }
        }
        return message;
      }
    },
    methods: {
      handleClick: function (i) {
        const history = this.history.slice(0, this.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (this.calculateWinner(squares) || squares[i]) {
          return;
        }
        squares[i] = this.xIsNext ? 'X' : 'O';
        this.history = history.concat([{
          squares: squares,
        }]);
        this.stepNumber = this.history.length - 1;
        this.xIsNext = !this.xIsNext;
      },

      jumpTo: function (step) {
        this.stepNumber = step;
        this.xIsNext = (step % 2) === 0;
      },

      nextMove: function () {
        this.stepNumber++;
        this.xIsNext = (this.stepNumber % 2) === 0;
      },
      prevMove: function () {
        this.stepNumber--;
        this.xIsNext = (this.stepNumber % 2) === 0;
      },

      calculateWinner: function (squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        this.winnerLine = [null, null, null];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            this.winnerLine = lines[i];
            return squares[a];
          }
        }
        return null;
      }
    }
  }
</script>

<style>
    li.move {
        cursor: pointer;
        padding: 5px;
        width: 100%;
        margin-top: 5px;
        text-align: left;
        font-size: 1rem;
    }

    .status {
        padding: 40px;
        text-align: center;
    }
</style>
