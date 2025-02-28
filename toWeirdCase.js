function toWeirdCase(string) {
    let words = string.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
        let word = words[i].split("");
        for (let j = 0; j < word.length; j += 2) {
            word[j] = word[j].toUpperCase();

        }
        words[i] = word.join("");
    }
    return words.join(" ");
}