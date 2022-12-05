import type { PropType } from 'vue'
import { defineComponent } from 'vue'

enum Size {
  'small' = 'u-sm',
  'medium' = 'u-base',
  'large' = 'u-xl'
}

export const spaceProps = {
  modelValue: Boolean,
  size: {
    type: String as PropType<keyof typeof Size>,
    default: 'medium'
  },
  disabled: Boolean
}

export default defineComponent({
  name: 'Switch',
  props: spaceProps,
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    return () => (
      <label class={['u-switch u-disabled:u-disabled', Size[props.size]]} disabled={props.disabled || undefined}>
        <input
          class="u-switch-input peer"
          type="checkbox"
          checked={props.modelValue}
          onChange={(event: Event) => emit('update:modelValue', (event.target as HTMLInputElement).checked)}
        />
        <span class="u-switch-action peer-checked:u-switch-action-checked peer-active:u-switch-action-active peer-checked:peer-active:u-switch-action-active-checked" />
      </label>
    )
  }
})
