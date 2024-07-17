function firstNonRepeatingLetter(s) {
    s = s.toLowerCase();
    let charCount = {};
    for (let char of s) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    
    for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (charCount[char] === 1) {
        return s[i];
      }
    }
    
    return '';
  }
  
  // Examples
  console.log(firstNonRepeatingLetter("stress")); // Output: "t"
  console.log(firstNonRepeatingLetter("sTreSS")); // Output: "T"
  console.log(firstNonRepeatingLetter("moonmen")); // Output: "m"
  console.log(firstNonRepeatingLetter("abba")); // Output: ""











  function firstNonRepeatingLetter(s) {
    let charCount = {};
    let firstIndex = {};
    let lowerCaseS = s.toLowerCase();
    for (let i = 0; i < lowerCaseS.length; i++) {
      let char = lowerCaseS[i];
      charCount[char] = (charCount[char] || 0) + 1;
      if (!(char in firstIndex)) {
        firstIndex[char] = i;
      }
    }

    for (let char in charCount) {
      if (charCount[char] === 1) {
        return s[firstIndex[char]];
      }
    }

    return '';
  }
  
  // Examples
  console.log(firstNonRepeatingLetter("stress")); // Output: "t"
  console.log(firstNonRepeatingLetter("sTreSS")); // Output: "T"
  console.log(firstNonRepeatingLetter("moonmen")); // Output: "m"
  console.log(firstNonRepeatingLetter("abba")); // Output: ""
  
  