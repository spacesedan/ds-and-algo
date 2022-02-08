function reverse(str) {
  if (typeof str !== 'string' || !str || str.length < 2) {
    return 'Something went wrong';
  }

  return str.split('').reverse().join('');
}
function reverse2(str) {
  if (typeof str !== 'string' || !str || str.length < 2) {
    return 'Something went wrong';
  }
  const reversed = [];
  const totalLength = str.length - 1;
  for (let i = totalLength; i >= 0; i--) {
    reversed.push(str[i]);
  }
  return reversed.join('');
}

const reverse3 = str => [...str].reverse().join('');

const reverseThis = reverse('Hello, My name is Jose');
const reverseThis2 = reverse2('Hello, My name is Jose');
const reverseThis3 = reverse3('Hello, My name is Jose');
console.log(reverseThis);
console.log(reverseThis2);
console.log(reverseThis3);
