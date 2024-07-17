function averageSquaredDiff(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      throw new Error("Arrays must have the same length");
    }
  
    let sum = 0;
    
    for (let i = 0; i < arr1.length; i++) {
      let diff = arr1[i] - arr2[i];
      let squaredDiff = diff * diff; 
      sum += squaredDiff;
    }
  
    let avg = sum / arr1.length;
    
    return avg;
  }
  
  // Examples
  console.log(averageSquaredDiff([1, 2, 3], [4, 5, 6])); // Output: 9
  console.log(averageSquaredDiff([10, 20, 10, 2], [10, 25, 5, -2])); // Output: 16.5
  console.log(averageSquaredDiff([-1, 0], [0, -1])); // Output: 1
  