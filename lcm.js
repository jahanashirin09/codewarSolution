function gcd(a, b) {
  
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return Math.abs(a);
  }
  
  function lcm(a, b) {
    return (a === 0 || b === 0) ? 0 : Math.abs(a * b) / gcd(a, b);
  }
  
  function leastCommonMultiple(...args) {
    if (args.length === 0) {
      return 1;
    }
 
    let lcmResult = args[0];
  
    // Calculate LCM iteratively for the remaining numbers
    for (let i = 1; i < args.length; i++) {
      lcmResult = lcm(lcmResult, args[i]);
      if (lcmResult === 0) {
        break; // If any lcmResult becomes 0, return immediately
      }
    }
  
    return lcmResult;
  }
  
  // Examples
  console.log(leastCommonMultiple(3, 5));              // Output: 15
  console.log(leastCommonMultiple(10, 15, 20));        // Output: 60
  console.log(leastCommonMultiple(0, 5, 10));          // Output: 0
  console.log(leastCommonMultiple(1, 2, 3, 4, 5));     // Output: 60
  console.log(leastCommonMultiple());                  // Output: 1
  