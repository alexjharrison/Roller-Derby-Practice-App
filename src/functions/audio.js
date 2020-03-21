export const play = filename =>
  new Promise(resolve => {
    const audio = document.createElement("AUDIO");
    audio.setAttribute("src", "/audio/" + filename);
    audio.play();
    audio.onended = resolve;
  });

export const speak = sentence =>
  new Promise(resolve => {
    const synth = speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(sentence);
    synth.speak(utterance);
    utterance.onend = resolve;
  });
