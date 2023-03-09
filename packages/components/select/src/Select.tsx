import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'
import { UIcon } from '../../icon'

interface Option {
  label: string
  value: boolean | number | string
  disabled?: boolean
}

const selectProps = {
  modelValue: { type: [String, Number, Boolean] as PropType<string | number | boolean | null>, default: null },
  placeholder: { type: String, default: null },
  disabled: { type: Boolean, default: false },
  options: Array as PropType<Option[]>,
}

export default defineComponent({
  name: 'Select',

  props: selectProps,

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const isNotSelected = computed(() => {
      return props.modelValue === undefined || props.modelValue === null || props.modelValue === ''
    })

    function isSelected(option: Option): boolean {
      return option.value === props.modelValue
    }

    return () => <div class="u-wrapper u-disabled:u-disabled" disabled={props.disabled || undefined}>
      <select
        class={`u-select ${isNotSelected.value && 'u-select-not-selected'}`}
        onChange={(event: Event) => emit('update:modelValue', (event.target as HTMLInputElement).value)}
      >
        <option
          class="u-select-option"
          value={null}
          disabled
          selected={isNotSelected.value}
        >{ props.placeholder || 'Place select' }</option>
        { props.options!.map((option, index) => (
            <option
              class="u-select-option"
              key={index}
              value={option.value}
              disabled={option.disabled}
              selected={isSelected(option)}
            >{ option.label }</option>
        ))}
      </select>
      <UIcon class="u-select-suffix" icon="i-carbon:chevron-down" />
    </div>
  },
})
