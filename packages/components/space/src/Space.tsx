import type { PropType } from 'vue'
import { defineComponent } from 'vue'

enum Align {
  'stretch' = 'items-stretch',
  'baseline' = 'items-baseline',
  'start' = 'items-start',
  'end' = 'items-end',
  'center' = 'items-center',
  'flex-end' = 'items-flex-end',
  'flex-start' = 'items-flex-start'
}

enum Size {
  small = 'gap-2',
  medium = 'gap-4',
  large = 'gap-6'
}

export const spaceProps = {
  vertical: Boolean,
  align: String as PropType<keyof typeof Align>,
  wrap: {
    type: Boolean,
    default: true
  },
  size: {
    type: String as PropType<keyof typeof Size>,
    default: 'medium'
  }
}

export default defineComponent({
  name: 'Space',
  props: spaceProps,
  render() {
    const { vertical, align, wrap, size, $slots } = this
    const children = $slots.default?.()
    if (!children?.length)
      return null
    return (
      <div class={[
        'u-space',
        'flex',
        vertical ? 'flex-col' : 'flex-row',
        Align[align],
        wrap ? 'flex-wrap' : 'flex-nowrap',
        Size[size]
      ]}>
        { children }
      </div>
    )
  }
})
