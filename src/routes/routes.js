import SingleMovie from '../components/SingleMovie.vue'
import Home from '../components/Home.vue'
export default  [
    { path: '/single-movie/:id', component: SingleMovie },
    { path: '/', component: Home },
  ]
  