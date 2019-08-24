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
        width: 90px;
        height: 90px;
        background-color: transparent;
        border: 2px solid #ffffff;
        color: #ffffff;
        font-size: 54px;
        cursor: pointer;
        margin: 5px;
        font-family: "Berlin Sans FB" !important;
    }
</style>
