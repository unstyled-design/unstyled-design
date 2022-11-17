import type { PropType } from 'vue'
import { defineComponent } from 'vue'

enum Direction {
  vertical = 'flex-col',
  horizontal = 'flex-row'
}

enum Align {
  'baseline' = 'items-baseline',
  'start' = 'items-start',
  'end' = 'items-end',
  'center' = 'items-center'
}

enum Size {
  small = 'gap-2',
  medium = 'gap-4',
  large = 'gap-6'
}

export const spaceProps = {
  direction: {
    type: String as PropType<keyof typeof Direction>,
    default: 'horizontal'
  },
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
    const { direction, align, wrap, size, $slots } = this
    const children = $slots.default?.()
    if (!children?.length)
      return null
    return (
      <div class={[
        'u-space',
        'flex',
        Direction[direction],
        align ? Align[align] : '',
        wrap ? 'flex-wrap' : 'flex-nowrap',
        Size[size]
      ]}>
        { children.map((child, index) => (
          <div class={'max-w-full'} key={index}>{ child }</div>
        ))}
      </div>
    )
  }
})
