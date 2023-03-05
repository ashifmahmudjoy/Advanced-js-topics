let bonus = 20;

function sum(first, second)
{
  let result = first+second;
  console.log(result);
  if(result>9){
    const mood = "happy";
    console.log(mood);

    var x = "hello";

  }
  console.log(x);//with var we can use the variable outside scope
  //it's called hoisting

  return result;
}

const output = sum(3,7);

console.log(output);
console.log(bonus);