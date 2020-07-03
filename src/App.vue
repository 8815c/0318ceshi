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
      
      <Add :commen='commen'></Add>
      <List :comments='comments' :deletCp='deletCp'></List>
    </div>
  </div>
</div>
</template>

<script>

import Add from './components/add'
import List from './components/list'

export default {
  name: '',
  components:{
    Add,
    List
   },
   data(){
     return{
       comments:[
         {id:1,name:'haha',content:'很好'},
         {id:2,name:'喜喜',content:'厉害'},
         {id:3,name:'呵呵',content:'帮帮'}
       ]
     }
   },
   methods:{
     commen(comment){
       this.comments.unshift(comment)
     },
     deletCp(index){
       this.comments.splice(index,1)
     }
   }
  }

</script>

<style scoped>

</style>
