import { defineComponent } from 'vue'

export const spaceProps = {
  modelValue: Boolean,
  disabled: Boolean
}

export default defineComponent({
  name: 'Switch',
  props: spaceProps,
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    return () => (
      <label class="u-switch">
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
