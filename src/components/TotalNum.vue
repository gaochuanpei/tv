<template>
  <div class="tn">来访人数：{{ num }}</div>
</template>

<script>
export default {
  name: "TotalNum",
  props: ["num"]
};
</script>

<style scoped>
.tn {
  font-size: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>
