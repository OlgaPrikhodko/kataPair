// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// split string on space => get array of words
// for each word - move first letter to the end
//          add "ay" to the end of the word
// check punctuation

export function pigLatin(s: string): string {
  if (s.length === 0) return "";

  const words = s.split(" ");

  const reLatinWord = /[a-zA-Z]/;

  const newWords = words.map(word => {
    if (!word.match(reLatinWord)) return word;

    return word.substring(1) + word[0] + "ay";
  });

  return newWords.join(" ");
}
