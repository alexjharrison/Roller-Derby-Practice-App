import continuous from "@/exercises/continuous";
import onWhistle from "@/exercises/onWhistle";
import stationary from "@/exercises/stationary";

const exercises = {
  continuous,
  onWhistle,
  stationary
};

const stationarySetup = 10;

const durations = {
  continuous: exercise =>
    exercise.reduce((acc, { duration }) => acc + duration, 0),
  onWhistle: exercise => exercise.interval * exercise.repetitions,
  stationary: exercise => exercise.duration + stationarySetup
};

export default minutes => {
  const totalSessionLength = minutes * 60;
  const categories = ["continuous", "onWhistle", "stationary"];
  let generatedRoutines = [];
  let currentSessionLength = 0;
  let currentCategoryIndex = 0;
  while (currentSessionLength < totalSessionLength) {
    const routineCategoryName = categories[currentCategoryIndex];
    const categoryExercises = exercises[routineCategoryName];
    const exerciseIndex = Math.floor(Math.random() * categoryExercises.length);
    const currentRoutine = categoryExercises[exerciseIndex];

    generatedRoutines.push({
      category: routineCategoryName,
      exercise: currentRoutine
    });
    currentSessionLength += durations[routineCategoryName](currentRoutine);

    // increment category index
    currentCategoryIndex++;
    if (currentCategoryIndex === categories.length) currentCategoryIndex = 0;
  }

  return generatedRoutines;
};
