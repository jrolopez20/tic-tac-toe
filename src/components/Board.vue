<template>
    <div class="board">
        <template v-for="(item, index) in $props.squares">
            <square :value="item" @click="handleClick(index)"
                    :class="{ winnerSquare: checkWinnerSquare (index) }"></square>
            <br v-if="(index+1)%3==0">
        </template>
    </div>
</template>

<script>
  import Square from './Square.vue'

  export default {
    name: 'board',
    components: {Square},
    props: {
      squares: null,
      winnerLine: null
    },

    computed: {},

    methods: {
      handleClick: function (i) {
        this.$emit('click', i);
      },
      checkWinnerSquare: function (v) {
        for (let i of this.$props.winnerLine) {
          if (i === v) {
            return true
          }
        }
        return false
      }
    }
  }
</script>

<style>
    .board {
        text-align: center;
        padding: 10px;
    }

    .winnerSquare {
        color: orangered !important;
    }
</style>
