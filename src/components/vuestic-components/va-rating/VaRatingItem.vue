<template>
  <div
    @mousemove="onHover"
    @mouseleave="removeHover()"
    @focus="onFocus()"
    @blur="onBlur()"
    :tabindex="tabindex"
    class="va-rating-item"
    :class="{
      'va-rating-item__isFocused': isFocused
    }"
    @keyup.enter="onEnter"
  >
    <slot :props="{
      value: valueProxy, onClick
    }">
      <va-icon
        class="va-rating-item__wrapper"
        tabindex="-1"
        :name="computedIconName"
        :size="size"
        tag="button"
        :color="computedColor"
        @click="onClick"
      />
    </slot>
  </div>
</template>

<script lang="ts">
import { Watch, Mixins } from 'vue-property-decorator'

import VaIcon from '../va-icon/VaIcon.vue'

import { RatingValue } from './VaRating.types'
import { ColorThemeMixin } from '../../../services/ColorThemePlugin'
import { Options } from 'vue-class-component'

@Options({
  name: 'VaRatingItem',
  components: { VaIcon },
  props: {
    modelValue: { type: Number, default: 0 },
    filledIconName: { type: String, default: 'star' },
    halfIconName: { type: String, default: 'star_half' },
    emptyIconName: { type: String, default: 'star_empty' },
    halves: { type: Boolean, default: false },
    hover: { type: Boolean, default: false },
    tabindex: { type: Number },
    size: { type: [String, Number], default: 'medium' },
    emptyIconColor: { type: String },
  },
})
export default class VaRatingItem extends Mixins(ColorThemeMixin) {
  private isHovered = false
  private isFocused = false
  private shouldEmitClick = false
  private hoveredValue: RatingValue = this.modelValue

  private get computedIconName (): string {
    if (this.halves && this.valueProxy === RatingValue.HALF) {
      return this.halfIconName
    }
    return this.valueProxy === RatingValue.EMPTY
      ? this.emptyIconName
      : this.filledIconName
  }

  private get computedColor () {
    return this.valueProxy === RatingValue.EMPTY
      ? this.emptyIconColor || this.colorComputed
      : this.colorComputed
  }

  @Watch('modelValue')
  private onValueChange (newVal: RatingValue) {
    this.hoveredValue = newVal
  }

  private set valueProxy (value: RatingValue) {
    this.hoveredValue = value
    if (this.shouldEmitClick) {
      this.shouldEmitClick = false
      this.$emit('click', value)
    } else if (this.isHovered) {
      this.$emit('hover', value)
    }
  }

  private get valueProxy (): RatingValue {
    return this.isHovered ? this.hoveredValue : this.modelValue
  }

  private onClick (cursorPosition: MouseEvent) {
    this.shouldEmitClick = true
    this.proccessCursorInput(this.$el.clientWidth, cursorPosition.offsetX)
  }

  private proccessCursorInput (iconSize: number, offsetX: number) {
    this.valueProxy = this.halves && (offsetX / iconSize <= RatingValue.HALF)
      ? RatingValue.HALF : RatingValue.FULL
  }

  private onEnter () {
    this.shouldEmitClick = true
    this.valueProxy = RatingValue.FULL
  }

  private onHover (cursorPosition: MouseEvent) {
    if (!this.hover) { return }
    this.isHovered = true
    this.proccessCursorInput(this.$el.clientWidth, cursorPosition.offsetX)
  }

  private onFocus () {
    this.isFocused = true
  }

  private onBlur () {
    this.isFocused = false
  }

  private removeHover () {
    this.valueProxy = this.modelValue
    this.isHovered = false
  }
}
</script>

<style lang="scss">
  @import "../../vuestic-sass/resources/resources";

  .va-rating-item {
    display: inline-block;

    &__isFocused {
      transform: scale(1.1);
    }

    &__wrapper {
      @include normalize-button();
    }
  }
</style>
