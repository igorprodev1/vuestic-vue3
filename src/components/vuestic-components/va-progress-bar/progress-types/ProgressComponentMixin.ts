import { normalizeValue } from '../../../../services/utils'
import { makeContextablePropsMixin } from '../../../context-test/context-provide/ContextPlugin'
import { Mixins, Component } from 'vue-property-decorator'

const ProgressMixinContextableProps = makeContextablePropsMixin({
  modelValue: { type: Number, default: 0 },
  color: { type: String, default: 'primary' },
  // If 'indeterminate' is 'true' 'value' prop will be ignored.
  indeterminate: { type: Boolean, default: false },
})


export class ProgressComponentMixin extends Mixins(
  ProgressMixinContextableProps,
) {
  get normalizedValue (): number {
    return normalizeValue(this.c_modelValue)
  }
}
