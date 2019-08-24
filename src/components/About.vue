<template>
    <div class="container">
        <p class="p-5">Juego desarrollado para mostrar a <a href="https://vuejs.org/" class="text-secondary"
                                                            target="_blank">Vue.js</a> en acción. Idea original tomada
            del tutorial <a class="text-secondary"
                            href="https://reactjs.org/tutorial/tutorial.html" target="_blank">"Intro to React"</a>.</p>
        <hr class="star-light mb-5">
        <div class="p-5">
            <p class="author">Autor: <a href="https://www.linkedin.com/in/javier-rodriguez-lopez-498685105"
                                        class="text-secondary">Javier
                Rodríguez López</a></p>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'about'
  }
</script>

<style scoped>
    p, p * {
        font-family: "Cooper Black" !important;
        font-size: 1.8rem;
    }

    p.author, p.author * {
        font-size: 1.4rem;
    }
</style>
