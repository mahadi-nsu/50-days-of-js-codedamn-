// purpose

//  a function that will calculate 
//  Add , Sub , Mul etc

// One way 
let calc = (num1, num2 , calcType) =>{
    if(calcType === 'add'){
      return num1 + num2;
    }
     if(calcType === 'sub'){
      return num1 - num2;
    }
  }
  
  console.log(calc(1,2,'add'));
  console.log(calc(10,2,'sub'));
  
  // callback way
  let add = (num1 , num2) =>{
    return num1 + num2;
  } 
  
  let sub = (num1 , num2) =>{
    return num1 - num2;
  } 
  
  let calculation = (n1,n2,callback) =>{
    return callback(n1,n2)
  }
  
  console.log(calculation(5,10 , add))
  
  
  
  
  
  
  
  
  
  
  