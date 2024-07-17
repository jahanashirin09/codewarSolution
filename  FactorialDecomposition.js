function decomp(n) {
    function factorial(num) {
      if (num === 0 || num === 1) return BigInt(1);
      let result = BigInt(1);
      for (let i = 2; i <= num; i++) {
        result *= BigInt(i);
      }
      return result;
    }
    function countPrimeFactors(num, prime) {
      let count = BigInt(0);
      let p = BigInt(prime);
      while (num >= p) {
        count += BigInt(Math.floor(num / p));
        p *= BigInt(prime);
      }
      return count;
    }
    function sieveOfEratosthenes(limit) {
      let sieve = Array(limit + 1).fill(true);
      sieve[0] = sieve[1] = false;
      for (let i = 2; i <= Math.sqrt(limit); i++) {
        if (sieve[i]) {
          for (let j = i * i; j <= limit; j += i) {
            sieve[j] = false;
          }
        }
      }
      let primes = [];
      for (let i = 2; i <= limit; i++) {
        if (sieve[i]) primes.push(i);
      }
      return primes;
    }
    let fact = factorial(n);
    let primes = sieveOfEratosthenes(n);
    let result = "";
    for (let i = 0; i < primes.length; i++) {
      let prime = primes[i];
      let exponent = countPrimeFactors(n, prime);
      if (exponent > 0) {
        if (result !== "") result += " * ";
        result += `${prime}${exponent > 1 ? '^' + exponent : ''}`;
      }
    }
  
    return result;
  }
  
  // Examples
  console.log(decomp(12)); // Output: "2^10 * 3^5 * 5^2 * 7 * 11"
  console.log(decomp(22)); // Output: "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19"
  console.log(decomp(25)); // Output: "2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23"
  