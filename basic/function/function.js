// function add(num1, num2){
    
    
// }
// add(3,9)


function mul(a,b){
    return a*b
}


// console.log(mul(8,3));  // both method is correct


const val=(mul(2,9))
// console.log(val);









//      REST Operator  (...)



function Calculate_cart_price(...val){
    return val;
}

// console.log(Calculate_cart_price(2,4,5,6,56));  // return a array using the value


//  Object in Function


const car={                         // Object 
    name:"Bugati",
    class:"A",
    price: "800Dollar"
}

function features(helper){                                  // Function
    // console.log(`Car is ${helper.name} and the price is ${helper.price}` )
}

features(car)










// Array in funtion 


const arr=[233,55,66,77,88]                     //Array

function value_at_index(getarray){              // Function
return getarray[1]
}


console.log(value_at_index(arr))



