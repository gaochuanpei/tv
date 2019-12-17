<template>
  <div id="app">
    <top />
    <main-tv :items="items" @clickOn="goOn" />
    <total-num :num="num" />
    <div id="pb" v-show="state">加载中...</div>
    <iframe v-show="state" src="" id="ck"></iframe>
  </div>
</template>
<script>
import { getData } from "./network/home";
import Top from "./components/Top";
import MainTv from "./components/Main";
import TotalNum from "./components/TotalNum";
export default {
  name: "App",
  data() {
    return {
      items: null,
      state: false,
      num: 0
    };
  },
  methods: {
    goOn: function() {
      this.state = true;
    }
  },
  created() {
    getData().then(res => {
      this.num = res.shift()[0];
      res.sort(function(a, b) {
        return b[1] - a[1];
      });
      this.items = res;
    });
  },
  components: {
    Top,
    MainTv,
    TotalNum
  }
};
</script>
<style>
#pb {
  background-color: white;
  text-align: center;
}
#ck,
#pb {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
