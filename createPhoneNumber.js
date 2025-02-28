function createPhoneNumber(numbers) {
    numbers = numbers.join("");
    let result = "(";
    result += numbers.slice(0, 3) + ") " + numbers.slice(3, 6) + "-" + numbers.slice(6);
    return result;
}