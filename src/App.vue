<template>
  <div>
    <button @click="nextCategory">increment</button>
    <start v-if="!totalSessionLength"></start>
    <stationary v-if="categoryNum === 0" />
    <whistle v-if="categoryNum === 1" />
    <continuous v-if="categoryNum === 2" />
  </div>
</template>

<script>
import Start from "@/screens/Start";
import Stationary from "@/screens/Stationary";
import Whistle from "@/screens/Whistle";
import Continuous from "@/screens/Continuous";
export default {
  components: { Start, Stationary, Whistle, Continuous },
  data() {
    return {
      totalSessionLength: null,
      categoryNum: 0
    };
  },
  methods: {
    nextCategory() {
      this.categoryNum = this.categoryNum === 2 ? 0 : this.categoryNum + 1;
    }
  }
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
#start {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  margin-bottom: 1rem;
}
</style>
