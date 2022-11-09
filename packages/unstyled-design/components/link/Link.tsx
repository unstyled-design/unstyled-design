import { defineComponent } from 'vue'

export const UnLink = defineComponent({
  name: 'UnLink',

  setup(props, { slots }) {
    return () => <a class={'un-link'}>{ slots.default?.() }</a>
  }
})

export type UnLinkInstance = InstanceType<typeof UnLink>
