<template>
    <div class="board">
        <div class="board-row">
            <square :value="$props.squares[0]" @click="handleClick(0)"></square>
            <square :value="$props.squares[1]" @click="handleClick(1)"></square>
            <square :value="$props.squares[2]" @click="handleClick(2)"></square>
        </div>
        <div class="board-row">
            <square :value="$props.squares[3]" @click="handleClick(3)"></square>
            <square :value="$props.squares[4]" @click="handleClick(4)"></square>
            <square :value="$props.squares[5]" @click="handleClick(5)"></square>
        </div>
        <div class="board-row">
            <square :value="$props.squares[6]" @click="handleClick(6)"></square>
            <square :value="$props.squares[7]" @click="handleClick(7)"></square>
            <square :value="$props.squares[8]" @click="handleClick(8)"></square>
        </div>
    </div>
</template>

<script>
  import Square from './Square.vue'

  export default {
    name: 'board',
    components: {Square},
    props: {
      squares: null
    },

    methods: {
      handleClick: function (i) {
        this.$emit('click', i);
      },
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
