<template>
    <div class="board">

        <div class="board-row">
            <square :value="squares[0]" @click="handleClick(0)"></square>
            <square :value="squares[1]" @click="handleClick(1)"></square>
            <square :value="squares[2]" @click="handleClick(2)"></square>
        </div>
        <div class="board-row">
            <square :value="squares[3]" @click="handleClick(3)"></square>
            <square :value="squares[4]" @click="handleClick(4)"></square>
            <square :value="squares[5]" @click="handleClick(5)"></square>
        </div>
        <div class="board-row">
            <square :value="squares[6]" @click="handleClick(6)"></square>
            <square :value="squares[7]" @click="handleClick(7)"></square>
            <square :value="squares[8]" @click="handleClick(8)"></square>
        </div>
    </div>
</template>

<script>
  import Square from './Square.vue'

  export default {
    name: 'board',
    components: {Square},
    data() {
      return {
        squares: Array(9).fill(''),
        xIsNext: true,
      }
    },
    methods: {
      handleClick: function (i) {
        const squares = this.squares.slice();
        if (squares[i]) {
          return;
        }
        squares[i] = this.xIsNext ? 'X' : 'O';
        this.squares = squares;
        this.xIsNext = !this.xIsNext;
        const winner = this.calculateWinner(squares);
        let message = '';
        if (winner) {
          message = 'El ganador es: ' + winner;
        } else {
          message = 'Siguiente jugador: ' + (this.xIsNext ? 'X' : 'O');
        }
        this.$emit('statusChanged', message);
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
    .board {
        text-align: center;
        padding: 10px;
    }

    .board-row {
    }
</style>
