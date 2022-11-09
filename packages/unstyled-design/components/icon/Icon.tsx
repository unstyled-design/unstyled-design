import { defineComponent } from 'vue'

export const UnIcon = defineComponent({
  name: 'UnIcon',

  props: {
    icon: {
      type: String,
      required: true
    }
  },

  setup(props) {
    return () => <div class={['un-icon', props.icon]}></div>
  }
})

export type UnIconInstance = InstanceType<typeof UnIcon>
