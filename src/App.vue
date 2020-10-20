<template>
  <router-view />
</template>

<script  lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
})
export default class App extends Vue {
}
</script>

<style lang="scss">
  #app {
    font-family: Source Sans Pro, sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    color: #34495e;
    text-align: left;
  }
</style>
