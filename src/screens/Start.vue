<template>
  <div class="start">
    <h1>Ally's Derby Workout App</h1>
    <form @submit.prevent @submit="$emit('updateTime', totalSessionLength)">
      <label for="length">Set Session Length (minutes)</label><br />
      <input id="length" type="number" v-model.number="totalSessionLength" />
      <button type="submit">
        Start!
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalSessionLength: null
    };
  }
};
</script>
