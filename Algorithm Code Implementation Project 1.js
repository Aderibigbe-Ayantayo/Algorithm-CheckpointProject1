function analyzeSentence(sentence) {
    let length = 0;
    let word_count = 0;
    let vowel_count = 0;
    let in_word = false;

    for (let char of sentence) {
        if (char === '.') {
            break;
        }

        length++;

        if ("aeiouAEIOU".includes(char)) {
            vowel_count++;
        }

        if (char === ' ') {
            if (in_word) {
                word_count++;
                in_word = false;
            }
        } else {
            in_word = true;
        }
    }

    // If the last character before period was part of a word, count that word
    if (in_word) {
        word_count++;
    }

    console.log("Length of the sentence:", length);
    console.log("Number of words:", word_count);
    console.log("Number of vowels:", vowel_count);
}

// Example usage
let sentence = "This is an example sentence.";
analyzeSentence(sentence);
