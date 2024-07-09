<template>
  <Suspense @resolve="()=>{
      console.log('suspensed')
    }">
    <router-view></router-view>
  </Suspense>
</template>
<script setup>

</script>