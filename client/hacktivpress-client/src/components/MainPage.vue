<template>
  <div class="login-register-page">
    <Navbar />
    <div class="container flex center-absolute">
      <ListArticle />
    </div>
    <NewArticle />
  </div>
</template>

<script>
import Navbar from './Navbar'
import NewArticle from './NewArticle'
import ListArticle from './ListArticle'
export default {
  components: {
    Navbar,
    NewArticle,
    ListArticle
  },
  name: 'login-register-page',
  data () {
    return {
    }
  },
  computed: {
    getData () {
      return this.$store.commit('getData')
    }
  },
  mounted () {
    this.getData
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
