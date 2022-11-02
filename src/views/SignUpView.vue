<template>
    <h1 class="title">Регистрация</h1>
    <form @submit.prevent="signUp">
      <label>
        Phone:
        <input type="tel" v-model="this.phoneNumber">
      </label>
      <label>
        Username:
        <input type="text" v-model="this.nickname">
      </label>
      <button type="submit">submit</button>
    </form>
</template>

<script>
// import VPhoneInput from '@/components/v-phone-input.vue'
import AuthSrvice from '@/services/auth'

export default {
  methods: {
    data () {
      return {
        phoneNumber: '',
        nickname: ''
      }
    },
    signUp () {
      AuthSrvice.register({ phoneNumber: this.phoneNumber, nickname: this.nickname })
    }
  }
}
</script>
