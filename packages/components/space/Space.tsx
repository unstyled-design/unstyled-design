import { defineComponent } from 'vue'

export const USpace = defineComponent({
  name: 'USpace',

  props: {
    wrap: {
      type: Boolean,
      default: true
    },

    vertical: {
      type: Boolean,
      default: false
    },

    align: {
      type: String,
      default: undefined
    }
  },

  setup() {
    return () => <div>space</div>
  }
})
