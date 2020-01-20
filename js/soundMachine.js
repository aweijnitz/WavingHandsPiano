// Functions relating to playback (uses Howl.js)
function loadSounds() {
  console.log('Loading sound sprites.');
  let noteLength = 500;
  let sound = new Howl({
    src: ['sound/c-major-scale.mp3'],
    sprite: {
      C0: [0, noteLength],
      D: [500, noteLength],
      E: [1000, noteLength],
      F: [1500, noteLength],
      G: [2000, noteLength],
      A: [2500, noteLength],
      B: [3000, noteLength],
      C1: [3500, noteLength],
    }
  });
  return sound;
}

function playNote(note) {

  if (!sound.playing()) {
    //console.log('Playing: ', note);
    sound.play(note);
  }
}
