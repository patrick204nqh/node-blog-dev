// Global object

setTimeout(() => {
  console.log('in the timeout');
}, 3000);

const int = setInterval(() => {
  console.log('in the interval');
}, 1000);
