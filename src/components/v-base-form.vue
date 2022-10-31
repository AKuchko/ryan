<template>
    <form @submit.prevent="sendData">
        <label>
            Enter Phone Number:
            <input type="tel" v-model="phone">
        </label>
    </form>
</template>

<script>
export default {
  name: 'baseFormVue',
  data: () => {
    return {
      phone: ''
    }
  },
  methods: {
    sendData () {
      console.log(this.phone)
      this.phone = ''
    }
  }
}
</script>
