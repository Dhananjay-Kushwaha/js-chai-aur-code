// Object



const sym= Symbol("key")            //Symbol


const Employee={

    name: "Dhananjay",
    age : 34,
    city : "Kerala",
    islooged: true,

    "Employe_id": 3563,
    [sym]:true,   /// for symbol
    
}

// console.log(Employee.name);  // 1st method to call object
// console.log(Employee.city);


// console.log(Employee["age"])   // 2nd method to call object
// console.log(Employee["Employe_id"])   

// console.log(typeof (Employee[sym]));   // symbol


// console.log(Employee);



