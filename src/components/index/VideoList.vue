<template>
  <div id="video-list">
  <swiper :options="swiperOption">
      <!-- 幻灯内容 -->
      <swiper-slide v-for="(item, index) in dataList" :key="index">
        <div>
          <videos :videosList="item" :index="index"></videos>
        </div>
        <div class="infobar_warp">
          <info-bar></info-bar>
        </div>
      </swiper-slide>
  </swiper>
  </div>
</template>

<script>
import Videos from '../index/Videos.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import InfoBar from '../../components/index/InfoBar'
export default {
  name: 'VideoList',
  components: {
    Videos,
    swiper,
    swiperSlide,
    InfoBar
  },
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        slidesPerView: 1,
        mousewheel: true,
        mousewheelControl: true,
        height: window.innerHeight,
        resistanceRatio: 0,
        observeParents: true
      },
      dataList: [
        {
          id: '1',
          url: 'http://video.jishiyoo.com/3720932b9b474f51a4cf79f245325118/913d4790b8f046bfa1c9a966cd75099f-8ef4af9b34003bd0bc0261cda372521f-ld.mp4'
        },
        {
          id: '2',
          url: 'http://video.jishiyoo.com/1eedc49bba7b4eaebe000e3721149807/d5ab221b92c74af8976bd3c1473bfbe2-4518fe288016ee98c8783733da0e2da4-ld.mp4'
        },
        {
          id: '3',
          url: 'http://video.jishiyoo.com/549ed372c9d14b029bfb0512ba879055/8e2dc540573d496cb0942273c4a4c78c-15844fe70971f715c01d57c0c6595f45-ld.mp4'
        },
        {
          id: '4',
          url: 'http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4'
        }
      ]
    }
  }
}
</script>

<style>
.video-list{
    height:100%;
  }
.swiper-container{
  height:100%;
  position: relative;
}
.infobar_warp{
  position: absolute;
  left: 20px;
  bottom: 60px;
}
</style>
