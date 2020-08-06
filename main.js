let arg = [2, 8, 9, 2, 4];
console.log(arg);
let step = factory(arg);

function factory(arg){
  let i = 0;
  
  return function (callback) {
    if (i == arg.length) {
      i = 0;
    };
    if (!callback || typeof callback != 'function') {
      return (arg[i++]);
    };      
    if (i < arg.length) {
      return (callback(arg[i++]));
    }; 
  }
}

function sqr(x) {
  return x*x;
} 

console.log(step());
console.log(step());
console.log(step());
console.log(step());
console.log(step());
console.log('----------------------');
console.log(step(sqr));
console.log(step(sqr));
console.log(step(sqr));
console.log(step(sqr));
console.log(step(sqr));
