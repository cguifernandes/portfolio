import { createApp } from 'vue'
import App from './App.vue'
import './styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)
library.add(fab, fas)

app.use(MotionPlugin)
app.component('FontAwesomeIcon', FontAwesomeIcon).mount('#app')
