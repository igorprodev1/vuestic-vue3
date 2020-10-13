<template>
  <div>
    <h1>Loading: {{loading}}</h1>
     <va-slider v-model="value" />
      <va-image
          style="width: 200px; height: 200px;"
          :src="'https://picsum.photos/200/200'"
        >
        <template #loader>
            Loading...
          </template>
          <template #error>
            Error
          </template>
        </va-image>
  </div>
</template>

<script  lang="ts">

import { Options, Vue } from 'vue-class-component'
// import VaAlert from './components/vuestic-components/va-alert/VaAlert.vue'
// import VaBadge from './components/vuestic-components/va-badge/VaBadge.vue'
// import VaCard from './components/vuestic-components/va-card/VaCard.vue'
// import VaCardTitle from './components/vuestic-components/va-card/VaCardTitle.vue'
// import VaCardContent from './components/vuestic-components/va-card/VaCardContent.vue'
import VaSlider from './components/vuestic-components/va-slider/VaSlider.vue'
// import VaIcon from './components/vuestic-components/va-icon/VaIcon.vue'
// import VaCheckbox from './components/vuestic-components/va-checkbox/VaCheckbox.vue'
// import VaBreadcrumbs from './components/vuestic-components/va-breadcrumbs/VaBreadcrumbs.vue'
// import VaBreadcrumbsItem from './components/vuestic-components/va-breadcrumbs/VaBreadcrumbsItem.vue'
// import VaColorPickerDemo from './components/vuestic-components/va-color-picker/VaColorPicker.demo.vue'
import VaImage from './components/vuestic-components/va-image/VaImage.vue'
@Options({
  components: {
    // VaBadge,
    // VaAlert,
    // VaCard,
    // VaCardTitle,
    // VaCardContent,
    VaSlider,
    // VaIcon,
    // VaCheckbox,
    // VaBreadcrumbs,
    // VaBreadcrumbsItem,
    VaImage,
  },
})
export default class App extends Vue {
  data () {
    return {
      loading: false,
      value: 50,
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
