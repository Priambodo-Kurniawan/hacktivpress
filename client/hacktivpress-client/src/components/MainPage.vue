<template>
  <div class="main-page">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-md-offset-3 col-md-6">
          <div class="panel panel-default">
            <div class="panel-body">
              <LoginRegister />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'
import LoginRegister from './LoginRegister'
export default {
  components: {
    Navbar,
    LoginRegister
  },
  name: 'main-page',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
