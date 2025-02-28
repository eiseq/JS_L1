function primeFactors(n) {
    let p = [];
    while (n % 2 === 0) {
        p.push(2);
        n /= 2;
    }
    for (let i = 3; i < n; i += 2) {
        while (n % i === 0) {
            p.push(i);
            n /= i;
        }
    }
    if (n > 2) p.push(n);
    let count = {};
    for (let i of p) {
        count[i] = (count[i] || 0) + 1;
    }
    let result = "";
    for (let prime in count) {
        let c = count[prime];
        result += `(${prime}${c > 1 ? `**${c}` : ``})`;
    }
    return result;
}