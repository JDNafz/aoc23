let input = 'abc'
// console.log('A'.charCodeAt(0));

function crypt(str,augment = 0, answer){
  
  let sum = 0;
  for (letter of str){
    const currentLetter = letter.toUpperCase().charCodeAt(0)-64;
    // console.log(currentLetter);
    sum += currentLetter
  }
  if (augment === 'find'){
    diff = sum - answer
    return `diff is ${diff}`
  } else {
    sum += augment;
  }
  return `sum is: ${sum}`
}

// to use simply input a string
// ABA or aba both equal 4
// crypt('ABA')
console.log(crypt('aba', 'find', 32))