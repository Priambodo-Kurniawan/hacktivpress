<template>
  <div class="login-register-page">
    <Navbar />
    <div class="container flex center-absolute">

    </div>
    <NewArticle />
  </div>
</template>

<script>
import Navbar from './Navbar'
import NewArticle from './NewArticle'
export default {
  components: {
    Navbar,
    NewArticle
  },
  name: 'login-register-page',
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

.center-absolute {
  align-items: center;
  justify-content: center;
  height: 90vh;
}


</style>
