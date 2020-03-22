<template>
  <div>
    <progress :value="currentExerciseIndex" :max="routine && routine.length" />
    <start v-if="status === 'notStarted'" @updateTime="generate($event)" />
    <continuous
      v-else-if="
        status === 'exercising' && currentExercise.category === 'continuous'
      "
      @next="currentExerciseIndex++"
      :exercise="currentExercise.exercise"
    />
    <stationary
      v-else-if="
        status === 'exercising' && currentExercise.category === 'stationary'
      "
      @next="currentExerciseIndex++"
      :exercise="currentExercise.exercise"
    />
    <whistle
      v-else-if="
        status === 'exercising' && currentExercise.category === 'onWhistle'
      "
      @next="currentExerciseIndex++"
      :exercise="currentExercise.exercise"
    />
    <finished
      v-if="status === 'done'"
      @start-over="
        routine = null;
        currentExerciseIndex = 0;
      "
    />
  </div>
</template>

<script>
import Start from "@/screens/Start";
import Stationary from "@/screens/Stationary";
import Whistle from "@/screens/Whistle";
import Continuous from "@/screens/Continuous";
import Finished from "@/screens/Finished";
import generateRoutine from "@/functions/generateRoutine";
import NoSleep from "nosleep.js";
export default {
  components: { Start, Stationary, Whistle, Continuous, Finished },
  data() {
    return {
      currentExerciseIndex: 0,
      routine: null,
      noSleep: new NoSleep()
    };
  },
  computed: {
    currentExercise() {
      if (!this.routine) return null;
      return this.routine[this.currentExerciseIndex];
    },
    status() {
      if (!this.routine) return "notStarted";
      else if (this.currentExercise) return "exercising";
      else return "done";
    }
  },
  methods: {
    generate(length) {
      this.routine = generateRoutine(length);
      this.noSleep.enable();
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
  margin: 0;
}
.timer {
  font-size: 80px;
}
progress {
  width: 100%;
  margin-bottom: 40px;
}
.skip-btn {
  margin-top: 50px;
}
</style>
