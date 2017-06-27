import VueRouter from 'vue-router'
import Home from './components/Home'



let routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]

export default new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: function(to, from, savedPosition) {
        if (to.hash) {
            return {selector: to.hash}
        } else {
            return { x: 0, y: 0 }
        }
    },
});
