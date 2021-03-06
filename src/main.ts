import { createApp } from 'vue'
import App from './App.vue'
import { ContextPlugin } from './components/context-test/context-provide/ContextPlugin'
// import router from './router'
import { ColorThemePlugin } from './services/ColorThemePlugin'
// @ts-ignore
import { getContext } from './components/context-test/context-provide/context'
//@ts-ignore
import { VueBookComponents, createRoute } from 'vue-book'
import { createRouter, createWebHashHistory } from 'vue-router'
import ToastInstall from './components/vuestic-components/va-toast/install'

const app = createApp(App)

const routes = [
  createRoute({
    requireContext: require.context('./components', true, /.demo.vue$/),
    path: '/demo',
  }),
  {
    path: '/:pathMatch(.*)*',
    redirect: '/demo',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


app.use(ColorThemePlugin)
app.use(VueBookComponents)
app.use(ToastInstall)
app.use(router)

app.use(ContextPlugin, getContext())

app.mount('#app')
