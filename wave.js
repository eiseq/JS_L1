function wave(str) {
    resultWords = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") continue;
        const ch = str.split("");
        ch[i] = ch[i].toUpperCase();
        resultWords.push(ch.join(""));
    }
    return resultWords;
}