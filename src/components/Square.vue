<template>
    <button class="square" @click="$emit('click')">{{value ? value : '&nbsp;'}}</button>
</template>

<script>
  export default {
    name: 'square',
    props: {
      value: null
    }
  }
</script>

<style>
    .square {
        width: 70px;
        height: 70px;
        background-color: #ffffff;
        border: 1px solid #000000;
        font-size: 30px;
        cursor: pointer;
        margin: 5px;
        font-family: "Berlin Sans FB";
    }

    .square:hover {
        background-color: beige;
    }

    .square:active {
        background-color: aliceblue;
    }
</style>
