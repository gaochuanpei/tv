<template>
  <div>
    <div id="pic" ref="pic"></div>
    <div id="nav">
      <input
        type="button"
        v-for="(item, index) in items"
        :key="index"
        :value="'第' + item[1] + '集'"
        @click="next(item[2])"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      items: []
    };
  },
  created() {
    const tv_name = this.$route.params.id;
    let tv_content = this.$store.state.tv;
    for (let item of tv_content) {
      if (item[0] === tv_name) {
        item[1].sort(function(a, b) {
          return b[1] - a[1];
        });
        this.items = item[1];
        break;
      }
    }
  },
  methods: {
    next: function(item) {
      //window.location.href = item;
      this.$store.commit("changePb");
      let iframe = document.getElementById("ck");
      iframe.setAttribute("webkitallowfullscreen", "");
      iframe.setAttribute("mozallowfullscreen", "");
      iframe.setAttribute("allowfullscreen", "");
      iframe.src = item;
    }
  },
  mounted() {
    //图片临时存储，若后期需要再转放后台
    const title = this.$route.params.id;
    switch (title) {
      case "庆余年":
        this.$refs.pic.style.backgroundImage =
          "url(http://img.akqipai.com/upload/img/201912/32496_b.jpg)";
        break;
      case "爱的迫降":
        this.$refs.pic.style.backgroundImage =
          "url(http://img.akqipai.com/upload/img/1912/0757155001576370402.jpg)";
        break;
      case "锦衣之下":
        this.$refs.pic.style.backgroundImage =
          "url(http://img.akqipai.com/upload/img/1912/0629779001577535601.jpg)";
        break;
      case "身为一个胖子":
        this.$refs.pic.style.backgroundImage =
          "url(http://img.akqipai.com/upload/img/1912/0814738001576676401.jpg)";
        break;
      default:
        break;
    }
  }
};
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav input {
  width: 60px;
  text-align: center;
  margin-right: 20px;
  margin-bottom: 10px;
}

#pic {
  margin: 0 auto;
  width: 154px;
  height: 204px;
}
</style>
