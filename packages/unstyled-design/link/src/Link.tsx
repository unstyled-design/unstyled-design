import { defineComponent, h } from 'vue'

export const UnLink = defineComponent({
  name: 'UnLink',

  setup(props, { slots }) {
    return () => h('a', { class: 'un-link' }, slots.default?.())
  }
})

export type UnLinkInstance = InstanceType<typeof UnLink>
