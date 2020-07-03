<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style="display: none">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item v-for="(item, index) in comments" 
      :key="item.id" 
      :item='item' 
      :index='index'
      :deletCp='deletCp'>
      </Item>
    </ul>
  </div>
</template>

<script>
import Item from "./items";
export default {
  name: "",
  components:{
    Item
  },
  props:['comments','deletCp']
  }

</script>

<style scoped>
.reply {
  margin-top: 0px;
}
</style>
