<template>
 
   <ul>
    <li v-for="item in data" :key="item._path">
      <NuxtLink :to="item._path">{{ item.title }}</NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const route = useRoute()

const { data } = await useAsyncData(`content-${route.path}`, () => {
  return queryContent('blog').find()
})

console.log(data.value)
</script>