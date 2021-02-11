export const getSharedIndex = (a: string, b: string): string => {
    const partsA = a.split('-');
    const partsB = b.split('-');
    const partsRes: string[] = [];
    for (let i = 0; i < 5; i++) {
        partsRes.push(
            Math.abs(
                Number.parseInt(partsA[i], 16) ^ Number.parseInt(partsB[i], 16)
            ).toString(16)
        );
    }
    return partsRes.join('-');
};
