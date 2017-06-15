<template>
<div class="new-article well">
  <div id="ArticleNew" class="modal fade" role="dialog">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">New Article</h4>
        </div>
        <div class="modal-body">
          <form class="form-horizontal">
            <fieldset>
              <div class="form-group">
                <label for="title" class="col-lg-3 control-label">Title</label>
                <div class="col-lg-9">
                  <input type="text" class="form-control" id="title" placeholder="title your article" ref="title" required>
                </div>
              </div>
              <div class="form-group">
                <label for="content" class="col-lg-3 control-label">Content</label>
                <div class="col-lg-9">
                  <textarea type="text" class="form-control" id="content" ref="content" required />
                </div>
              </div>
              <div class="form-group">
                <label for="image-link" class="col-lg-3 control-label">Image Link</label>
                <div class="col-lg-9">
                  <input type="text" class="form-control" id="image-link" ref="image" placeholder="image link of your article" required>
                </div>
              </div>
              <div class="form-group">
                <label for="category" class="col-lg-3 control-label">Category</label>
                <div class="col-lg-9">
                  <input type="text" class="form-control" id="category" ref="category" placeholder="Input Your Category" required>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" name="button" class="btn pull-right" @click="submitData">Post</button>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'new-article',
  data() {
    return {
      data: null,
      error: false
    }
  },
  methods: {
    submitData(){
      let data = {}
      data.title = this.$refs.title.value || null
      data.content = this.$refs.content.value || null
      data.image = this.$refs.image.value || null
      data.category = this.$refs.category.value || null
      data.creator = localStorage.getItem('user_id') || null
      // console.log(data);

      let self = this
      axios.post('http://localhost:5000/api/articles', data)
      .then((response) => {
        if (response.data.errors) {
          console.log('error');
          self.error = true
          setTimeout(function(){ self.error = false }, 2000)
        } else {
          console.log(response.data);
          $('.close').trigger('click')
          alert('Article created')
          location.reload()
        }
      })
      .catch( err => console.log(err))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
