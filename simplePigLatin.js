function pigIt(str) {
    let words = str.split(' ');
    function isLetter(char) {
      return char.toLowerCase() != char.toUpperCase();
    }
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
    
      if (word.match(/^[A-Za-z]+$/)) {
       
        words[i] = word.slice(1) + word[0] + 'ay';
      }
     
    }
  
    return words.join(' ');
  }
  
  
  console.log(pigIt('Pig latin is cool')); 
  console.log(pigIt('Hello world !'));    
  