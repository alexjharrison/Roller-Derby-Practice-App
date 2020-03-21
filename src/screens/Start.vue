<template>
  <div>
    <h1>Ally's Derby Workout App</h1>
    <form @submit.prevent @submit="hasStarted = true">
      <label for="length">Set Session Length (minutes)</label>
      <input id="length" type="number" v-model.number="totalSessionLength" />
      <button type="submit">
        Start!
      </button>
    </form>
  </div>
</template>

<script>
export default {};
</script>
