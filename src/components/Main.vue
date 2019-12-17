<template>
  <div>
    <div id="pic"></div>
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
  props: ["items"],
  methods: {
    next: function(item) {
      //window.location.href = item;
      this.$emit("clickOn");
      let iframe = document.getElementById("ck");
      iframe.src = item;
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
  background-image: url("http://img.akqipai.com/upload/img/201912/32496_b.jpg");
}
</style>
