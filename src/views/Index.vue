<template>
<div class="index">
    <top-bar></top-bar>
    <video-list></video-list>
    <div></div>
    <RightBar></RightBar>
</div>
</template>

<script>
import TopBar from '../components/index/TopBar'
import VideoList from '../components/index/VideoList'
export default {
  name: 'index',
  components: {
    TopBar,
    VideoList
  }
}
</script>

<style>

</style>
