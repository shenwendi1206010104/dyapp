<template>
  <div class="tab-bar">
      <div class="item" @click="changeTab(0)">
        <router-link to='/index' tag="span" :class="tabIndex==0?'active':''">首页</router-link>
      </div>
      <div class="item" @click="changeTab(1)">
        <router-link to='/follow' tag="span" :class="tabIndex==1?'active':''">熟人</router-link>
      </div>
      <div class="item" @click="changeTab(2)">
        <router-link to='/index' tag="span" :class="tabIndex==2?'active':''">+</router-link>
      </div>
      <div class="item" @click="changeTab(3)">
        <router-link to='/index' tag="span" :class="tabIndex==3?'active':''">消息</router-link>
      </div>
      <div class="item" @click="changeTab(4)">
        <router-link to='/index' tag="span" :class="tabIndex==4?'active':''">我</router-link>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      tabIndex: 0
    }
  },
  methods: {
    changeTab (index) {
      this.tabIndex = index
    }
  }
}
</script>

<style>
</style>
