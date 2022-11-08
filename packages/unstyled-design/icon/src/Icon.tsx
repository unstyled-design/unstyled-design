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
    // eslint-disable-next-line react/no-unknown-property, react/prop-types
    return () => <div class={['un-icon', props.icon]}></div>
  }
})

export type UnIconInstance = InstanceType<typeof UnIcon>
