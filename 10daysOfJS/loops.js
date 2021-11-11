function vowelsAndConsonants(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  const first = [];
  let last = [];
  let newWord = [];

  const word = s.split("");

  word.forEach((lt) => {
    if (vowels.includes(lt)) {
      first.push(lt);
    } else {
      last.push(lt);
    }
  });

  newWord = [...first, ...last];

  newWord.forEach((lt) => console.log(lt));
}
