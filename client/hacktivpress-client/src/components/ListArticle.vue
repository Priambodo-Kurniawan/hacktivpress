<template>
<div class="list-article ">
  <div v-for="article in viewData">
    <h4>Judul: {{article.title}}</h4>
    <p>{{article.content}}</p>
    <h6>author: {{article.creator.username}}</h6>
    <p>category: {{article.category}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'list-article',
  data() {
    return {
    }
  },
  computed: {
    viewData () {
      return this.$store.getters.data
    }
  },
  created () {
    this.viewData
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
