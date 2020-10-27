<script lang="ts">
import { h } from 'vue'
import { Vue, Options } from 'vue-class-component'

@Options({
  name: 'VaTabsContent',
})
export default class VaTabsContent extends Vue {
  render () {
    // Should render only html markup mapped to selected tab
    // ATM renders all content that is not tabs
    return h(
      'div', (this as any).$slots.default().filter((e: any) => {
        if (e.type) {
          return e.type.name !== 'VaTab'
        }
        return true
      }),
    )
  }
}
</script>
