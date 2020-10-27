<script lang="ts">
import { h } from 'vue'
import { Vue, Options } from 'vue-class-component'

@Options({
  name: 'VaTabsItems',
})
export default class VaTabsItems extends Vue {
  render () {
    return h(
      'div',
      {
        class: 'va-tabs__tabs-items',
      },
      (this as any).$slots.default().filter((e: any) => {
        if (e.type) {
          return e.type.name === 'VaTab'
        }
        return false
      }),
    )
  }
}
</script>
