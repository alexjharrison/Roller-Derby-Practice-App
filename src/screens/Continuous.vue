<template>
  <div>
    <h1>Continuous</h1>
    <h2>{{ name }}</h2>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  props: ["exercise"],
  data() {
    return {
      name: this.exercise[0].name,
      count: this.exercise[0].duration,
      halfTime: Math.floor(this.exercise[0].duration / 2)
    };
  },
  async mounted() {
    for (let i = 0; i < this.exercise.length; i++) {
      this.name = this.exercise[i].name;
      this.count = this.exercise[i].duration;
      this.halfTime = Math.floor(this.exercise[i].duration / 2);
      await this.doExercise();
    }
    this.$emit("next");
  },
  methods: {
    async doExercise() {
      await this.$speak(
        `Now get ready to do ${this.name} for ${this.count} seconds`
      );
      await this.$speak("Ready?");
      await this.$play("beep.wav");
      return new Promise(resolve => {
        const interval = setInterval(async () => {
          this.count--;
          if (this.count === this.halfTime) {
            this.$speak("Half the time has elapsed");
          }
          if (this.count === 0) {
            clearInterval(interval);
            await this.$play("beep.wav");
            resolve();
          }
        }, 1000);
      });
    }
  }
};
</script>
