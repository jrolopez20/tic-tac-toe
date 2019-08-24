import VueRouter from 'vue-router'

import Game from '../components/Game'
import About from '../components/About'
import PageNotFound from '../components/PageNotFound'


let router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Game, name: 'game'},
    {path: '/about', component: About, name: 'about'},
    {path: '**', name: 'page-not-found', component: PageNotFound}
  ]
});

export default router;
