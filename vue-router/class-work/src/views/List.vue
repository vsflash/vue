<template>
  <h3>List</h3>
<!--  <router-link-->
<!--          v-for="art in artist"-->
<!--          :key="art.index"-->
<!--          :to="{name:'item', params:{item_id: art.name.replace(' ', '_')}}"-->
<!--  >-->
<!--    {{art.name}}-->
<!--  </router-link>-->
</template>

<script>

export default {
  data(){
    return{
      artist:[]
    }
  }
  // beforeRouteEnter(to, from, next) {
  // next(vm => {
  //   fetch('http://www.json-generator.com/api/json/get/cuKKbBWWXm?indent=2')
  // })
  // }
}
</script>
