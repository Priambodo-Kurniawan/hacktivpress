<template>
<div class="login-register ">
  <div class="panel panel-default login-register">
    <div class="panel-body">
      <form class="form-horizontal">
        <fieldset>
          <legend>Login</legend>
          <div class="form-group">
            <label for="inputEmail" class="col-lg-3 control-label">Email</label>
            <div class="col-lg-9">
              <input type="email" class="form-control" id="inputEmail" placeholder="Email" ref="logEmail" required>
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword" class="col-lg-3 control-label">Password</label>
            <div class="col-lg-9">
              <input type="password" class="form-control" id="inputPassword" placeholder="Password" ref="logPassword" required>
            </div>
          </div>
          <div class="form-group">
            <div class="col-lg-10 col-lg-offset-2">
              <button class="btn btn-primary" @click="login">Login</button>
            </div>
          </div>
        </fieldset>
      </form>
      <div class="alert text-center" v-if="loginError">
        <small>{{logErrorMsg}}</small>
      </div>
    </div>
  </div>
  <div class="panel panel-default login-register">
    <div class="panel-body">
      <form class="form-horizontal">
        <fieldset>
          <legend>Register</legend>
          <div class="form-group">
            <label for="inputEmail" class="col-lg-3 control-label">Email</label>
            <div class="col-lg-9">
              <input type="email" class="form-control" id="inputEmail" placeholder="Email" ref="regEmail" required>
            </div>
          </div>
          <div class="form-group">
            <label for="username" class="col-lg-3 control-label">Username</label>
            <div class="col-lg-9">
              <input type="text" class="form-control" id="username" placeholder="Username" ref="regUsername" required>
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword" class="col-lg-3 control-label">Password</label>
            <div class="col-lg-9">
              <input type="password" class="form-control" id="inputPassword" placeholder="Password" ref="regPassword" required>
            </div>
          </div>
          <div class="form-group">
            <div class="col-lg-10 col-lg-offset-2">
              <button class="btn btn-primary" @click="register">Register</button>
            </div>
          </div>
        </fieldset>
      </form>
      <div class="alert text-center" v-if="registerError">
        <small>{{regErrorMsg}}</small>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'login-register',
  data() {
    return {
      loginError: false,
      logErrorMsg: null,
      registerError: false,
      regErrorMsg: null
    }
  },
  methods: {
    login () {
      let data = {}
      data.email = this.$refs.logEmail.value || null
      data.password = this.$refs.logPassword.value || null

      let self = this
      axios.post('http://localhost:5000/api/users/login', data)
      .then((response) => {
        if (response.data.errors) {
          self.loginError = true
          setTimeout(function(){ self.loginError = false }, 2000)
        } else {
          if (response.data.hasOwnProperty('err')) {
            self.loginError = true
            self.logErrorMsg = response.data.err
            setTimeout(function(){ self.loginError = false }, 2000)
          } else {
            console.log(response.data);
            localStorage.setItem('token', response.data)
            window.location = "/home";
          }
        }
      })
      .catch( err => console.log(err));
    },
    register () {
      let data = {}
      data.email = this.$refs.regEmail.value || null
      data.username = this.$refs.regUsername.value || null
      data.password = this.$refs.regPassword.value || null
      
      let self = this
      axios.post('http://localhost:5000/api/users/signup', data)
      .then((response) => {
        if (response.data.errors) {
          self.error = true
          setTimeout(function(){ self.error = false }, 2000)
        } else {
          if (response.data.hasOwnProperty('err')) {
            self.registerError = true
            self.regErrorMsg = response.data.err
          } else {
            console.log(response.data);
            window.location = "/home";
          }
        }
      })
      .catch( err => console.log(err));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav {
    margin-bottom: 0;
  }
  nav.navbar.navbar-default {
    margin-bottom: 0px;
    border-radius: 0;
  }
  .control-label {
    font-size: 12px
  }
</style>
