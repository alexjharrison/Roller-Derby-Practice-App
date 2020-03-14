<template>
  <div v-if="!hasStarted">
    <h1>Ally's Derby Workout App</h1>
    <form id="start" @submit.prevent @submit="hasStarted = true">
      <label for="length">Set Session Length (minutes)</label>
      <input id="length" type="number" v-model.number="totalSessionLength" />
      <button @click="speak(`ally in the sky with diamonds`)" type="submit">
        Start!
      </button>
    </form>
  </div>
  <div v-else>
    else
    <audio ref="whistle" id="whistle" src="/audio/beep.wav" />
  </div>
</template>

<script>
// import { continuous, onWhistle, stationary } from "./exercises";
export default {
  name: "App",
  data() {
    return {
      hasStarted: false,
      totalSessionLength: 30,
      synth: window.speechSynthesis,
      isSpeaking: false
    };
  },
  watch: {
    isSpeaking(newValue) {
      if (newValue === false) {
        this.$refs.whistle.play();
      }
    }
  },
  methods: {
    speak(sentence) {
      const utterance = new SpeechSynthesisUtterance(sentence);
      this.synth.speak(utterance);
      this.isSpeaking = true;
      const interval = setInterval(() => {
        console.log("going");
        if (!this.synth.speaking) {
          this.isSpeaking = false;
          clearInterval(interval);
        }
      }, 500);
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
