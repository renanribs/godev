// map
const numbers = [1, 2, 3, 4, 5];

const multiplyByTwo = numbers.map(function (numbers) {
  return numbers * 2;
});

console.log(multiplyByTwo);

// filter
const ages = [8, 10, 15, 26, 30];

const evenAges = ages.filter(function (age) {
  return age % 2 === 0;
});

console.log(evenAges);

//reduce

const sumOfAges = ages.reduce(function (age, accumulator) {
  return accumulator + age;
}, 0);

console.log(sumOfAges);
