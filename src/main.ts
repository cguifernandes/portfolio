import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { MotionPlugin } from '@vueuse/motion'
import Vue3Lottie from 'vue3-lottie'
import './styles/globals.css'
import { register } from 'swiper/element/bundle'

const app = createApp(App)
library.add(fab, fas)

app.use(MotionPlugin)
app.use(Vue3Lottie)
app.component('FontAwesomeIcon', FontAwesomeIcon).mount('#app')
register()
