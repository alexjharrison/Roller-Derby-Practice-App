<template>
  <div>
    <h1>Whistle</h1>
    <h2>{{ exercise.name }}</h2>
    <p><strong>Repetitions Remain:</strong> {{ repsLeft }}</p>
    <p class="timer">{{ count }}</p>
  </div>
</template>

<script>
export default {
  props: ["exercise"],
  data() {
    return {
      repsLeft: this.exercise.repetitions,
      count: this.exercise.interval
    };
  },
  async mounted() {
    await this.$speak(
      `Now it's time to do ${this.exercise.name}, ${this.exercise.repetitions} times for ${this.exercise.interval} seconds each`
    );
    await this.$speak("Ready?");
    await this.$play("beep.wav");
    const interval = setInterval(async () => {
      this.count--;
      if (this.count === -1 && this.repsLeft > 0) {
        this.$play("beep.wav");
        this.count = this.exercise.interval;
        this.repsLeft--;
      } else if (this.count === -1 && this.repsLeft === 0) {
        this.count = 0;
        clearInterval(interval);
        await this.$play("beep.wav");
        await this.$speak("All Done");
        this.$emit("next");
      }
    }, 1000);
  }
};
</script>
