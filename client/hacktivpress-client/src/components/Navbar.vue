<template>
<div class="nav-bar ">
  <nav class="navbar navbar-default ">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Hacktivpress</a>
      </div>
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right" v-if="username == null">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right" v-else>
        <li><a href="#">Hello {{username}}</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
        <li><button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#ArticleNew">Post Article</button></li>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: 'nav-bar',
  data() {
    return {
      username: localStorage.getItem('username') || null,
    }
  },
  computed: {
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
  button.btn.btn-info.btn-lg {
    margin-top: 10px;
  }
</style>
