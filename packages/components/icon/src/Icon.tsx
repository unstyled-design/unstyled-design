import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Icon',

  props: {
    icon: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    return () => <div class={['u-icon', props.icon]}></div>
  },
})
