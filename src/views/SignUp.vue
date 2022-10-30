<template>
    This is base form vue
    <baseFormVue @phoneModel="phone"/>
</template>

<script>
import baseFormVue from '@/components/v-base-form.vue'

export default {
  components: {
    baseFormVue
  },
  data () {
    return {
      phone: ''
    }
  }
}
</script>
