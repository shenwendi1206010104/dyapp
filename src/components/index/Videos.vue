<template>
<div class="videos">
  <video-player  class="video-player vjs-custom-skin"
    ref="videoPlayer"
    :playsinline="true"
    :options="playerOptions"
  ></video-player>
</div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'
export default {
  name: 'Videos',
  props: ['videosList', 'index'],
  components: {
    videoPlayer
  },
  data () {
    return {
      playerOptions: {
        autoplay: false,
        muted: false,
        loop: false,
        preload: 'auto',
        fluid: true,
        sources: [
          {
            src: this.videosList.url,
            type: 'video/mp4'
          }
        ],
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: false
      },
      playing: true
    }
  }
}
</script>

<style>
.videos{
    position: relative;
}
.videos .vjs-custom-skin >.video-js .vjs-big-play-button{
    background: rgba(0,0,0,0.4);
    font-size: 30px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    line-height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50%)
}
</style>
