function whatCentury(year) {
    let century = Math.ceil(year / 100);
    const rightDigit = century % 10;
    const leftDigit = parseInt(century / 10);
    if (rightDigit % 10 === 1 && leftDigit !== 1) century += "st";
    else if (rightDigit % 10 === 2 && leftDigit !== 1) century += "nd";
    else if (rightDigit % 10 === 3 && leftDigit !== 1) century += "rd";
    else century += "th";
    return century;
}