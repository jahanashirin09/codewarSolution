function integerPartitionsCount(n) {
   
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[i - j];
        }
    }

    return dp[n];
}

// Example usage:
let n = 5;
console.log(`Number of integer partitions of ${n}: ${integerPartitionsCount(n)}`);
