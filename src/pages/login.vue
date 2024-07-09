<template>
  <div @click="()=>{
    router.push('/index')
  }">
    login

    {{personDetail.name}}
  </div>
</template>
<script>
export default {}
</script>
<script setup>
import {useRouter} from "vue-router";
var router = useRouter()

const personDetail = await new Promise((resolve)=>{
  setTimeout(()=>{
    resolve({
      name: 'rancheng'
    })
  },3000)
})


</script>