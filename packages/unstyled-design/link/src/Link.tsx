import { defineComponent } from 'vue'

export const UnLink = defineComponent({
  name: 'UnLink',

  setup(props, { slots }) {
    // eslint-disable-next-line react/no-unknown-property
    return () => <a class={'un-link'}>{ slots.default?.() }</a>
  }
})

export type UnLinkInstance = InstanceType<typeof UnLink>
