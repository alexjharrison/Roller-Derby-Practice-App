<template>
  <div>
    <h1>Finished</h1>
    <h2>You dun did it!</h2>
    <button @click="$emit('start-over')">Start Over</button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$speak("Booyakasha. You did it. Woot.");
  }
};
</script>
