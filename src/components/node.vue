<script setup>

defineProps({
  name: String
})

// const nodeDetail = await new Promise((resolve)=>{
//   setTimeout(()=>{
//     resolve({
//       users: ['rancheng']
//     })
//   },100)
// })

var startTime = Date.now()
const results = await Promise.all([
  new Promise((resolve)=>{
    setTimeout(()=>{
      resolve({
        users: ['rancheng']
      })
    },100)
  }),
  new Promise((resolve)=>{
    setTimeout(()=>{
      resolve({
        age: 18
      })
    },100)
  }),
  new Promise((resolve)=>{
    setTimeout(()=>{
      resolve({
        age: 18
      })
    },100)
  })
])
var endTime = Date.now()

console.log('rangeTime',endTime - startTime)

const nodeDetail = results[0]
const userDetail = results[1]

//console.log('node loaded')

</script>

<template>
  <h1>
    {{name}}
    {{nodeDetail.users[0]}}
    {{userDetail.age}}
  </h1>
</template>
