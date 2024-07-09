<script setup>
import node from './node.vue'
import {  useRouter } from 'vue-router'
const router = useRouter()

const nodes = await new Promise((resolve)=>{
  setTimeout(()=>{
    resolve([
      {
        name: 'node1'
      },
      {
        name: 'node2'
      },
      {
        name: 'node3'
      }
    ])
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
