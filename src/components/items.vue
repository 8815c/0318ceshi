<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="delte">删除</a>
    </div>
    <p class="user">
      <span>{{item.name}}</span>
      <span>说:</span>
    </p>
    <p class="centence">{{item.content}}!</p>
  </li>
</template>

<script>
export default {
  name: "",
  props:['item',"deletCp","index"],
  methods:{
      delte(){
        this.deletCp(this.index)
      }
  }
  
}
</script>

<style scoped>
li {
  transition: 0.5s;
  overflow: hidden;
}

.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}

.list-group-item .centence {
  padding: 0px 50px;
}

.user {
  font-size: 22px;
}
</style>
