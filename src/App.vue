<template>
  <Suspense @resolve="()=>{
      console.log('suspensed')
    }">
    <router-view></router-view>
  </Suspense>
</template>
<script>
export default {}
</script>
<script setup>

</script>