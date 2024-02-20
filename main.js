function countVietnameseCharacters(inputString) {
    const vietnameseChars = ['aw', 'aa', 'dd', 'ee', 'oo', 'ow', 'uw', 'w'];
    let count = 0;
  
    for (let i = 0; i < inputString.length; i++) {
      for (let j = 1; j <= 2; j++) {
        const currentChar = inputString.slice(i, i + j).toLowerCase();
        if (vietnameseChars.includes(currentChar)) {
          count++;
          i += j - 1;
          break;
        }
      }
    }
  
    return count;
  }
  
  const userInput = prompt('Enter a string of Vietnamese characters (Telex):');
  const result = countVietnameseCharacters(userInput);
  console.log(`Number of Vietnamese characters in the input: ${result}`);
  