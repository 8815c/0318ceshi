<template>
  <div id="app">
    <div>
      <header class="site-header jumbotron">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h1>请发表对React的评论</h1>
            </div>
          </div>
        </div>
      </header>
      <div class="container">
        <Add :addcomment="addcomment"></Add>
        <List :comments="comments" :deleteComment='deleteComment'></List>
      </div>
    </div>
  </div>
</template>

<script>
import Add from "./components/add.vue";
import List from "./components/list.vue";
export default {
  name: "",
  components: {
    Add,
    List
  },
  data() {
    return {
      comments: [
        { id: 1, content: "Vue真的很牛皮", username: "小明" },
        { id: 2, content: "我就是过来看看", username: "小红" },
        { id: 3, content: "啊哈哈哈", username: "渣渣" }
      ]
    };
  },
  methods: {
    addcomment(comment) {
      this.comments.unshift(comment)
    },
    deleteComment(index){
    this.comments.splice(index,1)
  }
  }
}
</script>

<style scoped>
</style>