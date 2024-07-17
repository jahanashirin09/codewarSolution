function toSnakeCase(input) {
    // Convert number input to string
    if (typeof input === 'number') {
      return String(input);
    }
    
    let result = '';
    
    for (let i = 0; i < input.length; i++) {
      let char = input.charAt(i);
      
      // Check if current character is uppercase and not the first character
      if (char === char.toUpperCase() && /[A-Z]/.test(char)) {
        // Add underscore before uppercase letters (except the first character)
        if (i > 0) {
          result += '_';
        }
        // Convert uppercase letter to lowercase and add to result
        result += char.toLowerCase();
      } else {
        // Add current character to result
        result += char;
      }
    }
    
    return result;
  }
  
  // Examples
  console.log(toSnakeCase("TestController")); // Output: "test_controller"
  console.log(toSnakeCase("MoviesAndBooks")); // Output: "movies_and_books"
  console.log(toSnakeCase("App7Test")); // Output: "app7_test"
  console.log(toSnakeCase(1)); // Output: "1"
  