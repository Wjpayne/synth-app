export const GenerateSequence = () => {
  const sequenceLength = 10;
  const generatedSequence = [["A3, 1"]];

  for (let i = 0; i < sequenceLength; i++) {
    let random = GetRandomInt(20);
    let randomLength = GetRandomLength(5)
    switch (random, randomLength) {
      case 0: {
        generatedSequence.push(["A3"], 1);
        break;
      }
      case 1: {
        generatedSequence.push(["Bb3"], 1);
        break;
      }
      case 2: {
        generatedSequence.push(["B3"], 1);
        break;
      }
      case 3: {
        generatedSequence.push(["C3"], 1);
        break;
      }
      case 4: {
        generatedSequence.push(["Db3"], 1);
        break;
      }
      case 5: {
        generatedSequence.push(["D3"], 1);
        break;
      }
      case 6: {
        generatedSequence.push(["Eb3"], );
        break;
      }
      case 7: {
        generatedSequence.push(["E3"], 1);
        break;
      }
      case 8: {
        generatedSequence.push(["F3"], 1);
        break;
      }
      case 9: {
        generatedSequence.push(["Gb3"], 1);
        break;
      }
      case 10: {
        generatedSequence.push(["G3"], 1);
        break;
      }
      case 11: {
        generatedSequence.push(["Ab3"], 1);
        break;
      }
      default:
        generatedSequence.push(["A3", 5]);
        break;
    }
  }
  return generatedSequence;
};

function GetRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function GetRandomLength(longest) {
    return Math.floor(Math.random() * longest)
}

//A, A#/Bb, B, C, C#/Db, D, D#/Eb, E, F, F#/Gb, G, and G#/Ab.
