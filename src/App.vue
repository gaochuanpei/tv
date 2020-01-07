<template>
  <div id="app">
    <top />
    <ul class="btn-group">
      <li
        class="btn btn-primary"
        v-for="(item, index) in items"
        :key="index"
        @click="goPath(item[0])"
      >
        {{ item[0] }}
      </li>
    </ul>
    <router-view></router-view>
    <total-num :num="num" />
    <div id="pb" v-show="state">加载中...</div>
    <iframe v-show="state" src="" id="ck"></iframe>
  </div>
</template>
<script>
import { getData } from "./network/home";
import Top from "./components/Top";
import TotalNum from "./components/TotalNum";
export default {
  name: "App",
  data() {
    return {
      items: null,
      first:true,
      num: 0
    };
  },
  computed: {
    state: function() {
      return this.$store.state.pb;
    }
  },
  methods: {
    goPath: function(title) {
      if (this.$route.fullPath !== "/") {
        this.$router.replace("/");
      }
      setTimeout(() => {
        this.$router.replace("/tv_first/" + title);
      }, 0);
    }
  },
  created() {
    getData().then(res => {
      let item_arr = [];
      this.num = res.shift()[0];
      res.forEach(function(item) {
        item_arr.push([item[0][0], item]);
      });
      this.$store.commit("changeTv", item_arr);
      this.items = this.$store.state.tv;
    });
  },
  updated() {
    if (this.first) {
      this.$router.replace("/tv_first/" + "庆余年");
      this.first = false;
    }
  },
  components: {
    Top,
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
  position: fixed;
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
