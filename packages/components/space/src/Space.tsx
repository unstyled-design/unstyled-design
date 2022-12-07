import type { PropType } from 'vue'
import { Comment, defineComponent } from 'vue'

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

enum Justify {
  'start' = 'justify-start',
  'end' = 'justify-end',
  'center' = 'justify-center',
  'around' = 'justify-around',
  'between' = 'justify-between',
  'evenly' = 'justify-evenly'
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
  justify: String as PropType<keyof typeof Justify>,
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
    const { direction, align, justify, wrap, size, $slots } = this
    const _children = $slots.default?.()
    if (!_children?.length)
      return null
    const children = _children.filter(node => node.type !== Comment)
    return (
      <div class={[
        'u-space',
        'flex',
        Direction[direction],
        align ? Align[align] : '',
        justify ? Justify[justify] : '',
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
