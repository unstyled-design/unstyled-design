import type { PropType } from 'vue'
import { defineComponent, h } from 'vue'
import { UIcon } from '../../icon'

enum Type {
  primary = 'u-primary',
  success = 'u-success',
  warning = 'u-warning',
  danger = 'u-danger',
  info = 'u-info'
}

enum Size {
  'small' = 'u-sm',
  'medium' = 'u-base',
  'large' = 'u-xl'
}

const buttonProps = {
  to: String,
  type: String as PropType<keyof typeof Type>,
  size: {
    type: String as PropType<keyof typeof Size>,
    default: 'medium'
  },
  plain: Boolean,
  dashed: Boolean,
  round: Boolean,
  icon: String
}

export default defineComponent({
  name: 'Button',

  props: buttonProps,

  render() {
    const { to, type, size, plain, dashed, round, icon, $slots } = this
    return (
      h(
        to ? 'a' : 'button',
        {
          class: [
            'u-button u-transition hover:u-button-hover active:u-button-active focus-visible:u-focus-base u-disabled:u-disabled',
            type ? Type[type] : '',
            Size[size],
            (type || plain) ? 'u-solid' : '',
            dashed ? 'u-dashed' : '',
            round ? 'rounded-full' : ''
          ],
          href: to
        },
        [
          icon ? h(UIcon, { icon }) : undefined,
          $slots.default?.()
        ]
      )
    )
  }
})
