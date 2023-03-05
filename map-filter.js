 const numbers = [3,4,5,6,7,8,9];
// const output = [];

// for(let i = 0;i<numbers.length; i++){
//   const result =numbers[i]*numbers[i];
//   output.push(result);

// }

// console.log(output);

function square(element){
  return element*element;
}

// const result = numbers.map(function(element, index,array){
//   console.log(element,index,array);
//   return element*element;
// })

const result = numbers.map(x=> x*x);

console.log(result);


const bigger = numbers.filter(x => x>5);
console.log(bigger);