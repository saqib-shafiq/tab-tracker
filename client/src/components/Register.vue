<template>
  <div>
    <h1>Register</h1>

    <div>
      <input type="email" name="email" v-model="email"><br>
      <input type="password" name="password" v-model="password"><br>
      <button @click="register">Submit</button>
    </div>

  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticaionService'
export default {
  // name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
