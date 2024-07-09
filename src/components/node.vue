<script setup>

defineProps({
  name: String
})

const nodeDetail = await new Promise((resolve)=>{
  setTimeout(()=>{
    resolve({
      users: ['rancheng']
    })
  },3000)
})
console.log('node loaded')

</script>

<template>
  <h1>
    {{name}}
    {{nodeDetail.users[0]}}
  </h1>
</template>
