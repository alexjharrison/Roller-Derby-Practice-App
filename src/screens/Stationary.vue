<template>
  <div>
    <h1>Stationary</h1>
    <h2>{{ exercise.name }}</h2>
    <p class="timer">{{ count }}</p>
  </div>
</template>

<script>
export default {
  props: ["exercise"],
  data() {
    return {
      count: this.exercise.duration
    };
  },
  async mounted() {
    await this.$speak(
      `Time to do ${this.exercise.name} for ${this.exercise.duration} seconds`
    );
    await this.$speak(`Assume the position`);
    await this.$wait(5000);
    await this.$speak("Ready?");
    await this.$play("beep.wav");
    const interval = setInterval(async () => {
      this.count--;
      if (this.count === Math.floor(this.exercise.duration / 2)) {
        this.$speak("Half the time has elapsed");
      }
      if (this.count === 0) {
        clearInterval(interval);
        await this.$play("beep.wav");
        this.$emit("next");
      }
    }, 1000);
  }
};
</script>
