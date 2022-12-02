import { computed, defineComponent } from 'vue'

export const spaceProps = {
  modelValue: String,
  label: String,
  value: String,
  disabled: Boolean
}

export default defineComponent({
  name: 'Radio',
  props: spaceProps,
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const isChecked = computed(() => props.modelValue === props.value)

    return () => (
      <label class="u-radio u-disabled:u-disabled" disabled={props.disabled || undefined}>
        <input
          class="u-radio-input peer"
          type="radio"
          value={props.value}
          disabled={props.disabled}
          checked={isChecked.value}
          onChange={(event: Event) => emit('update:modelValue', (event.target as HTMLInputElement).value)}
        />
        <span class="u-radio-action peer-checked:u-radio-action-checked" />
        <span>{slots.default ? slots.default() : props.label}</span>
      </label>
    )
  }
})
