<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-secondary fixed-top " id="mainNav">
            <div class="container">
                <h1 class="navbar-brand game-title">Tic Tac Toe</h1>
                <button class="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded"
                        type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse text-uppercase" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mx-0 mx-lg-1">
                            <router-link :to="{name: 'game'}" class="nav-link py-3 px-2 px-lg-3 rounded "
                                         :class="{ 'link-active': '/'===window.location.pathname }">
                                Juego
                            </router-link>
                        </li>
                        <li class="nav-item mx-0 mx-lg-1">
                            <router-link :to="{name: 'about'}" class="nav-link py-3 px-2 px-lg-3 rounded"
                                         :class="{ 'link-active': '/about'===window.location.pathname }">Acerca De
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div style="margin-top: 150px">
            <router-view/>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        window: null
      }
    },
    created() {
      this.window = window;
    }
  }
</script>

<style>
    .link-active {
        background: #ff812c;
        color: #ffffff;
    }

    .link-active:hover {
        color: #ffffff !important;
    }

    .game-title {
        font-family: "Ravie" !important;
    }
</style>
