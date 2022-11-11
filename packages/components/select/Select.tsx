import { defineComponent } from 'vue'

export const USelect = defineComponent({
  name: 'USelect',

  props: {

  },

  setup() {
    return () => <div>
      select
    </div>
  }
})

export type USelectInstance = InstanceType<typeof USelect>
