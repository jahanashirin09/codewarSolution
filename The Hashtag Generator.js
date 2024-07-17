function generateHashtag(str) {
    let words = str.trim().split(/\s+/);
    if (words.length === 0 || str === "") {
      return false;
    }
    let result = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    result = '#' + result;
    if (result.length > 140) {
      return false;
    }
  
    return result;
  }
  
 