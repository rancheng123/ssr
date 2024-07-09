<script setup>
import node from './node.vue'
import {  useRouter } from 'vue-router'
const router = useRouter()

const nodes = await new Promise((resolve)=>{
  setTimeout(()=>{
    resolve((()=>{
      var arr = []
      for(var i=0;i<1000;i++){
        arr.push({
          name: 'node' + (i+1)
        })
      }


      return arr
    })())
  },3000)
})

</script>

<template>
  <div>
    <node
        v-for="(node, nodeIndex) in nodes"
        :key="nodeIndex"
        :name="node.name" />
  </div>
</template>
