function findUniq(arr) {
    function normalizeString(str) {
      return str.toLowerCase().replace(/\s/g, '');
    }
    function countCharacters(str) {
      let charCount = {};
      for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
      }
      return charCount;
    }
  
    let normalizedStrings = arr.map(normalizeString);
    let charCounts = normalizedStrings.map(countCharacters)
    for (let i = 0; i < charCounts.length; i++) {
      let current = charCounts[i];
      let isUnique = true;
      for (let j = 0; j < charCounts.length; j++) {
        if (i !== j && isEqualObject(current, charCounts[j])) {
          isUnique = false;
          break;
        }
      }
      if (isUnique) {
        return arr[i];
      }
    }
  
    return null; 
  }
  
  // Function to compare two objects for equality
  function isEqualObject(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    for (let key of keys1) {
      if (obj1[key] !== obj2[key]) return false;
    }
    return true;
  }
  
  // Examples
  console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'])); // Output: 'BbBb'
  console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'])); // Output: 'foo'
  