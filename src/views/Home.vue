<template>
  <div class="home">
    <router-view></router-view>
    <ta-bar />
  </div>
</template>

<script>
import TaBar from '../components/TaBar'
export default {
  name: 'Home',
  components: {
    TaBar
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
