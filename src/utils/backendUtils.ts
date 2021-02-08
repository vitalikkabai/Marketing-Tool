export const getSharedIndex = (a: string, b: string): string => {
    console.log(a,b)
    const partsA = a.split('-');
    const partsB = b.split('-');
    console.log(partsA,partsB)
    const partsRes: string[] = []
    for (let i = 0; i < 5; i++) {
        partsRes.push(Math.abs(
            Number.parseInt(partsA[i], 16) ^
            Number.parseInt(partsB[i], 16)
        ).toString(16));
        console.log(partsRes,Number.parseInt(partsA[i], 16)^Number.parseInt(partsB[i], 16))
    }
    return partsRes.join('-')
}