<template>
    <div class="container text-center">
        <h1 class="text-dark">Error 404</h1>
        <p class="p-2 text-dark">La página a la que intenta acceder no existe.</p>
        <router-link :to="{name: 'game'}" class="btn px-5 btn-outline-light">
            Llevarme de regreso
        </router-link>
    </div>
</template>

<script>
  export default {
    name: 'page-not-found'
  }
</script>
<style>
</style>
