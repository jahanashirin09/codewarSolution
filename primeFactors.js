 function primeFactors(n) {
        let result = "";
        let divisor = 2;
      
        while (n >= divisor * divisor) {
          let count = 0;
          while (n % divisor === 0) {
            n /= divisor;
            count++;
          }
          if (count > 0) {
            result += `(${divisor}`;
            if (count > 1) {
              result += `**${count}`;
            }
            result += ")";
          }
          divisor++;
        }
      
        if (n > 1) {
          result += `(${n})`;
        }
      
        return result;
      }
      
      // Example
      console.log(primeFactors(86240)); // Output: "(2**5)(5)(7**2)(11)"
      


  