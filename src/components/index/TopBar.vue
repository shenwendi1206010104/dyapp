<template>
<div class="index">
    <div class="top-bar">
    <div class="left">
      <span class="iconfont icon-live"></span>
    </div>
    <div class="middle">
      <div class="item"  @click="changeBar(0)">
        <span :class="IndexBar==0?'active':''">关注</span>
      </div>
      <div class="item" @click="changeBar(1)">
        <span :class="IndexBar==1?'active':''">推荐</span>
      </div>
    </div>
    <div class="right">
      <span class="iconfont icon-sousuo"></span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      IndexBar: 0
    }
  },
  methods: {
    changeBar (index) {
      this.IndexBar = index
    }
  }
}
</script>

<style>
 .top-bar{
    position: fixed;
    /* background-color:black; */
    height:55px;
    width:100%;
    font-size:18px;
    color:#666;
    padding:20px;
    display: flex;
    box-sizing: border-box;
    /* 使用层级关系让被视频盖住的部分显示出来 */
    z-index: 999;
  }
  .left,.right{
    width:20%;
  }
  .iconfont{
    font-size: 24px;
  }
  .middle{
    width:60%;
    display: flex;
    justify-items: center;
  }
  .right{
    text-align: right;
  }
  .middle>.item{
    flex:1;
    text-align: center;
  }
  .middle .item span{
    padding:5px 0;
  }
  .middle .item .active{
    color:white;
    border-bottom: 2px solid #ffffff;
  }
</style>
