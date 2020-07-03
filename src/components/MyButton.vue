<template>
  <div>
    <button @click="count++">点击{{count}}次</button>
    <h2>萨摩耶</h2>
  </div>
</template>

<script>
export default {
  name: '',
  data(){
    return{
    count:0
    }
  }
}
</script>

<style scoped>
h2{
  color: pink;
}
</style>
