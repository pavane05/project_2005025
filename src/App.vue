<template>
  <VueHeader/>
  <router-view></router-view>
</template>

<script>
import VueHeader from '@/components/VueHeader';
export default {
  name: 'App',
  components: {
    VueHeader,
  }
}
</script>

<style>
</style>