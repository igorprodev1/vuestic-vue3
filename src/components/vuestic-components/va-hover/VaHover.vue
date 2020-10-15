<script lang="ts">
import { Mixins, Prop } from 'vue-property-decorator'
import { StatefulMixin } from '../../vuestic-mixins/StatefulMixin/StatefulMixin'
import { Options } from 'vue-class-component'
import { h } from 'vue'

@Options({
  name: 'VaHover',
})
export default class VaHover extends Mixins(StatefulMixin) {
  @Prop({
    type: Boolean,
    default: false,
  }) readonly disabled!: boolean

  onMouseEnter () {
    this.value = true
    this.$emit('input', true)
  }

  onMouseLeave () {
    this.value = false
    this.$emit('input', false)
  }

  render () {
    if (!(this.$slots as any)?.default()) {
      return
    }

    const slot = (this.$slots as any).default({ hover: this.value })

    if (!Array.isArray(slot) || !slot.length) {
      return
    }

    if (!this.disabled) {
      slot.forEach((element) => {
        element.data = element.data || {}
        // is used to bind listeners using vue native function
        // @ts-ignore
        this._g(element.data, {
          mouseenter: this.onMouseEnter,
          mouseleave: this.onMouseLeave,
        })
      })
    }
    return h('div', slot)
  }
}
</script>
