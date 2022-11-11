import { defineComponent } from 'vue'

export const UIcon = defineComponent({
  name: 'UIcon',

  props: {
    icon: {
      type: String,
      required: true
    }
  },

  setup(props) {
    return () => <div class={['u-icon', props.icon]}></div>
  }
})

export type UIconInstance = InstanceType<typeof UIcon>
