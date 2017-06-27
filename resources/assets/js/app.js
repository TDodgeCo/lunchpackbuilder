import './bootstrap.js'

import Example from './components/Example.vue'
import router from './routes'
import male from './dataMale'
import female from './dataFemale'

Vue.component('example', require('./components/Example.vue'));


const app = new Vue({
    el: '#app',
    router,
    components: {
      Example
    }
});
