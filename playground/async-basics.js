console.log('Starting app.');

setTimeout(() => console.log('Inside callback function.'), 2000);
setTimeout(() => console.log('Inside callback function 2.'), 0);

console.log('count 1');
console.log('count 2');
console.log('count 3');
console.log('Finishing up.');