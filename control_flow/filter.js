 const arr=[12,2 ,3,4,4,5,5,5,5,3,3,4,4,5,6,7,8,887,99,6,5]

const value=arr.filter((val)=> val>4)
// console.log(value);

// or if u r using curly braces then use return

const val2=arr.filter((val1)=>{
    return val1>100
})
// console.log(val2);



// OR 
const ans=[]
const val3= arr.filter((val4)=>{
    if(val4>100){
        ans.push(val4)
    }
})
console.log(ans);

