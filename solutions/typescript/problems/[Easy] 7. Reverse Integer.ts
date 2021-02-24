function reverse(x: number): number {
    const MAX_INTEGER = Math.pow(2, 31) - 1;
    const MIN_INTEGER = -Math.pow(2, 31);
    const result = parseInt(x.toString().split("").reverse().join("")) * (x < 0 ? -1 : 1) || 0;
    return result <= MAX_INTEGER && result >= MIN_INTEGER ? result : 0;
}
