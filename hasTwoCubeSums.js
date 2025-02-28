function hasTwoCubeSums(n) {
    let sumCount = 0;
    const cubeSums = new Set();
    for (let firstCubeRoot = 1; firstCubeRoot < Math.cbrt(n) + 1; firstCubeRoot++) {
        const firstCube = Math.pow(firstCubeRoot, 3);
        const secondCube = n - firstCube;
        if (secondCube > 0) {
            const secondCubeRoot = Math.cbrt(secondCube);
            if (secondCubeRoot > 0 && firstCubeRoot !== secondCubeRoot && Number.isInteger(secondCubeRoot)) {
                const sumKey = [firstCubeRoot, secondCubeRoot].sort((x, y) => x - y).join(',');
                if (!cubeSums.has(sumKey)) {
                    cubeSums.add(sumKey);
                    sumCount++;
                }
            }
        }
    }
    return sumCount > 1;
}