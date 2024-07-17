function alphanumeric(str) {
    // Regular expression to match alphanumeric characters
    let regex = /^[a-zA-Z0-9]+$/;
  
    // Test if the string matches the regular expression
    return regex.test(str);
  }
  
  // Examples
  console.log(alphanumeric("hello123"));   // true
  console.log(alphanumeric("hello 123"));  // false (contains whitespace)
  console.log(alphanumeric("hello_world")); // false (contains underscore)
  console.log(alphanumeric(""));            // false (empty string)
  console.log(alphanumeric("123"));         // true
  console.log(alphanumeric("!@#$%"));       // false (contains special characters)
  console.log(alphanumeric("AbCdEfG"));     // true
  