function hexStringToRGB(hexString) {
    hexString = hexString.replace("#", "").toUpperCase();
    const red = parseInt(hexString.substring(0, 2), 16);
    const green = parseInt(hexString.substring(2, 4), 16);
    const blue = parseInt(hexString.substring(4, 6), 16);
    return { r: red, g: green, b: blue };
}