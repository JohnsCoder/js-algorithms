function generateLotoNumbers(num) {
  for (i = 0; i < num; i++) {
    let loto = [];
    while (loto.length != 6) {
      let randomNumber = Math.trunc(Math.random() * 60 + 1);
      if (!loto.includes(randomNumber)) {
        loto.push(randomNumber);
        randomNumber = Math.trunc(Math.random() * 60 + 1);
      }
      randomNumber = Math.trunc(Math.random() * 60 + 1);
    }
    console.log(loto);
    loto = [];
  }
}

generateLotoNumbers(6)