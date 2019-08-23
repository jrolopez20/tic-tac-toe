<template>
    <div>
        <section class="section-board">
            <board @statusChanged="handleStatusChange"></board>
        </section>
        <section class="history">
            <h1>Jugadas</h1>
        </section>
        <div class="status">{{status}}</div>
    </div>
</template>

<script>
  import Board from './Board.vue'

  export default {
    name: 'game',
    components: {Board},
    data(){
      return{
        status: 'Siguiente jugador: X'
      }
    },
    methods: {
      handleStatusChange: function (msg) {
        this.status = msg;
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
    .status {
        padding: 20px;
        clear: both;
    }
</style>
