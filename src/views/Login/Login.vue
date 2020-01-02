<template>
  <div class="content">
    <div class="auth-content">
      <div class="auth-modal">
        <img src="@/assets/logo.png" width="200" alt="Logo" />
        <hr>
        <div class="auth-title">
          <input v-model="login.login" placeholder="Login:">
          <input v-model="login.senha" placeholder="Senha:" type="password">
          <button type="button" @click.prevent="doLogin">Logar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from '@/Services/AuthService.js'
export default {
  name: 'Login',
  data () {
    return {
      login: {
        login: '',
        senha: ''
      }
    }
  },
  methods: {
    doLogin () {
      AuthService.signin(this.login).then(data => {
        this.$router.push({ path: '/auth/' })
      })
    }
  }
}
</script>
<style scoped src="@/views/Login/login.css"></style>
