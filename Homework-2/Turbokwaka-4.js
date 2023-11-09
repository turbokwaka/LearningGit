function unpackSausages(trucks) {
    const unpackedSausages = [];
    let m = 0;

    for (let i = 0; i < trucks.length; i++) {
        const box = trucks[i];

        for (let j = 0; j < box.length; j++) {
            const package = box[j];

            if (package[0] === "[" && package[package.length - 1] === "]") {
                const packageArr = package.slice(1, -1).split("");
                const areEqual = packageArr.every(x => x === packageArr[0]);

                if (areEqual && packageArr.length === 4) {
                    m++;

                    if (m % 5 !== 0) {
                        unpackedSausages.push(...packageArr);
                    }
                }
            }
        }
    }

    const result = unpackedSausages.join(" ");
    return result;
}
