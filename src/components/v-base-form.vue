<template>
    <form @submit.prevent="sendData">
        <label>
            Enter Phone Number:
            <input type="tel" v-model="phoneModel">
        </label>
    </form>
</template>

<script>
export default {
  name: 'baseFormVue',
  data: () => {
    return {
      props: {
        phoneModel: ''
      }
    }
  },
  methods: {
    sendData () {
      console.log(this.phoneModel)
    }
  }
}
</script>
