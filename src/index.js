module.exports = function toReadable(number) {
    const units = [' zero', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
    const tens = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
    let result;
    const numLeight = number.toString().length;
    let numArr = Array.from(String(number), ((x) => Number(x)));

    const belowtwenty = function (te, un) {
        if (te === 0 && un === 0) return '';
        if (te === 0) return units[un];
        if (te === 1) return units[un + 10];
        if (te > 1 && un === 0) return tens[te];
        if (te > 1) return tens[te] + units[un];
    }

    if (numLeight === 3) result = units[numArr[0]] + ' hundred' + belowtwenty(numArr[1], numArr[2]);
    if (numLeight === 2) result = belowtwenty(numArr[0], numArr[1]);
    if (numLeight === 1) result = units[numArr[0]];
    return result.trim();
}
