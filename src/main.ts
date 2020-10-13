import { createApp } from 'vue'
import App from './App.vue'
import { ContextPlugin } from './components/context-test/context-provide/ContextPlugin'
// import router from './router'
import { ColorThemePlugin } from './services/ColorThemePlugin'
// @ts-ignore
import { getContext } from './components/context-test/context-provide/context'
import { VueBookComponents, createRoute } from 'vue-book'
import Router from 'vue-router'

const app = createApp(App)

// console.log(require.context('./components', true, /.demo.vue$/))
console.log(
    createRoute({
        requireContext: require.context('./components/vuestic-components', true, /.demo.vue$/),
        path: '/demo',
      }),
)

// app.use(VueBookComponents)
app.use(ColorThemePlugin)
app.use(ContextPlugin, getContext())

app.mount('#app')
