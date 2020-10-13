import { mixins } from 'vue-class-component';

import { makeContextablePropsMixin } from '../../context-test/context-provide/ContextPlugin'

const componentProps = {
  value: {
    type: undefined,
    default: undefined,
  },
  stateful: {
    type: Boolean,
    default: false,
  },
}

const PropsMixin = makeContextablePropsMixin(componentProps)

// TODO Definitions could be done better, but it's too complicated to bother.

export class StatefulMixin extends mixins(PropsMixin) {
  valueState = {
    value: undefined,
  }

  created () {
    this.hasStatefulMixin = true
  }
  
  // watch: {
  //   value = () => {
  //     if (this.stateful) {
  //       this.valueState.value = this.value
  //     }
  //   }
  // }
  

  get valueComputed () {
    if (this.stateful) {
      return this.valueState.value
    }
    return this.value
  }

  set valueComputed (value) {
    if (this.stateful) {
      this.valueState.value = value
    }
    this.$emit('input', value)
  }
}
