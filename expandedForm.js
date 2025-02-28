function expandedForm(num) {
    let result = "";
    const numStr = String(num);
    const digits = numStr.split("");

    for (let i = 0; i < digits.length; i++) {
        const digit = parseInt(digits[i]);
        if (digit !== 0) {
            result += digit;
            result += "0".repeat(digits.length - 1 - i);

            let hasMoreNonZero = false;
            for (let j = i + 1; j < digits.length; j++) {
                if (parseInt(digits[j]) !== 0) {
                    hasMoreNonZero = true;
                    break;
                }
            }
            if (hasMoreNonZero) {
                result += " + ";
            }
        }
    }
    return result;
}