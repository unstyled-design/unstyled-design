import type { PropType } from 'vue'
import { defineComponent } from 'vue'

type Align = 'stretch' | 'baseline' | 'start' | 'end' | 'center' | 'flex-end' | 'flex-start'

export const spaceProps = {
  wrap: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String,
    default: 'horizontal'
  },
  align: {
    type: String as PropType<Align>,
    default: undefined
  },
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium'
  }
}

export default defineComponent({
  name: 'USpace',
  props: spaceProps,
  setup(props, { slots }) {
    const children = slots.default?.()
    return {
      children
    }
  },
  render() {
    const { children } = this
    if (!children?.length)
      return null
    return (
      <div class={'u-space'}>
        { children }
      </div>
    )
  }
})
