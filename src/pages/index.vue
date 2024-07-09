<template>
  <div @click="()=>{
    router.push('/login')
  }">
    index
    <canvasFlow></canvasFlow>

  </div>

</template>
<script>
export default {}
</script>
<script setup>
import canvasFlow from '../components/canvas.vue'
import {useRouter} from "vue-router";
var router = useRouter()
</script>