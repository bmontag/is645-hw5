/*
    HW5 - Ex2
*/

const nbArray = [...Array(10).keys()].map(nb => nb += 1);

console.log(nbArray);

const oddNumbers = nbArray.filter(nb => nb % 2 == 1);
console.log(`Array of odd numbers: ${oddNumbers}`);

const divBy2And5 = nbArray.filter(nb => nb % 2 == 0 || nb % 5 == 0);
console.log(`Array of numbers divisible by 2 or 5: ${divBy2And5}`);

const divBy3Squared = nbArray
    .filter(nb => nb % 3 == 0)
    .map(nb => nb ** 2)
console.log(`Array of numbers divisible by 3 squared: ${divBy3Squared}`);

const sumOfSquaredDivBy5Nbs = nbArray
    .filter(nb => nb % 5 == 0)
    .map(nb => nb ** 2)
    .reduce( (acc, cur) => acc + cur );
console.log(`Sum of square the numbers divisible by 5: ${sumOfSquaredDivBy5Nbs}`);
