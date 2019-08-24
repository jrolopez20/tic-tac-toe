<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger">Tic Tac Toe</a>
                <button class="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded"
                        type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mx-0 mx-lg-1">
                            <router-link :to="{name: 'game'}" class="nav-link py-3 px-0 px-lg-3 rounded "
                                         :class="{ 'link-active': '/'===window.location.pathname }">
                                Juego
                            </router-link>
                        </li>
                        <li class="nav-item mx-0 mx-lg-1">
                            <router-link :to="{name: 'about'}" class="nav-link py-3 px-0 px-lg-3 rounded"
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
    * {
        font-family: "Verdana" !important;
    }

    body {
        color: #ffffff !important;
    }

    .link-active {
        background: #ff812c;
        /*background: #F03C02;*/
        color: #ffffff;
    }

    .link-active:hover {
        color: #ffffff !important;
    }
</style>
