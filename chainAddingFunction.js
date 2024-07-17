function add(num) {
    let total = num;
    function innerAdd(nextNum) {
   
      if (typeof nextNum === 'number') {
        total += nextNum;
        return innerAdd;
      }
   
      return total;
    }
  
    return innerAdd;
  }
  
  // Examples
  console.log(add(1)(2)); // Output: 3
  console.log(add(1)(2)(3)); // Output: 6
  console.log(add(1)(2)(3)(4)); // Output: 10
  console.log(add(1)(2)(3)(4)(5)); // Output: 15
  
  let addTwo = add(2);
  console.log(addTwo); // Output: 2
  console.log(addTwo + 5); // Output: 7
  console.log(addTwo(3)); // Output: 5
  console.log(addTwo(3)(5)); // Output: 10
  