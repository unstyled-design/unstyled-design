import { defineComponent } from 'vue'

export const UnSelect = defineComponent({
  name: 'UnSelect',

  props: {

  },

  setup() {
    return () => <div>
      select
    </div>
  }
})

export type UnSelectInstance = InstanceType<typeof UnSelect>
