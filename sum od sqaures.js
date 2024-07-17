function sum_of_squares(n) {
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }

    return dp[n];
}

// Examples
console.log(sum_of_squares(17)); // Output: 2
console.log(sum_of_squares(15)); // Output: 4
console.log(sum_of_squares(16)); // Output: 1
