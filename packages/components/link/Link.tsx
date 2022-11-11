import { defineComponent } from 'vue'

export const ULink = defineComponent({
  name: 'ULink',

  setup(props, { slots }) {
    return () => <a class={'u-link'}>{ slots.default?.() }</a>
  }
})

export type ULinkInstance = InstanceType<typeof ULink>
