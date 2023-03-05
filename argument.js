function add(num1,num2){
  console.log(arguments)
  //array like object
  return num1+ num2+arguments
}

const result = add(2,3,5)
console.log(result)