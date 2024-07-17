function expandedForm(num) {
    const numStr = num.toString();
    let result = [];

    for (let i = 0; i < numStr.length; i++) {
        let digit = parseInt(numStr[i]);
        if (digit !== 0) {
            let placeValue = Math.pow(10, numStr.length - 1 - i);
            result.push(digit * placeValue);
        }
    }

    return result.join(' + ');
}
