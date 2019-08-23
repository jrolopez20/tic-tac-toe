<template>
    <div>
        <h1>Tic Tac Toe</h1>
        <section class="section-board">
            <board :squares="current" @click="handleClick"></board>
            <div class="status">{{status}}</div>
        </section>
        <section class="history">
            <h1>Jugadas</h1>
            <ol>
                <li v-for="(move, index) in history" @click="jumpTo(index)">
                    <span class="move" v-if="!index">Ir al inicio</span>
                    <span class="move" v-if="index">Ir a la jugada {{index}}</span>
                </li>
            </ol>
        </section>
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

        // const history = this.history;
        // const squares = history[history.length - 1].squares.slice();

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
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }
    }
  }
</script>

<style>
    * {
        font-family: "Verdana";
    }

    .section-board {
        float: left;
        width: 70%;
    }

    .history {
        float: left;
        width: 30%;
    }

    .history li {
        cursor: pointer;
        padding: 5px;
    }

    .history li:hover {
        background-color: beige;
    }

    .status {
        padding: 40px;
        text-align: center;
    }

</style>
