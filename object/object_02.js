const car= {}      
car.name="Bugati Chiron "
car.model="A"
car.is_super_car="true"

// console.log(car);


/// -   -   -   -   -   -   -   -       --      Object in object

const school={
    adress: "Goa",
    teacher_name: {
        name :{
                first_name:"Aman",
                last_name:"singh", 
        }
    }
}

// console.log(school.adress);
// console.log(school.teacher_name.name.first_name);



// Merge in Object  

const obj1={
    A:"Sonu",
    b:"drd",
    name: "aman"

}

const obj2={
    x:"hdbjd",
    y: true,
    z:0
}

// const merged =Object.assign({},obj1,obj2)       // importnace of {}
// console.log(merged);

// console.log(obj1==merged);


//      or 

const merged= {...obj1, ...obj2 }
// console.log(merged);


// using obj1 and obj2



// console.log(Object.keys(car));          // Keys 
// console.log(Object.values(car));           // Values
// console.log(Object.entries(car));           // Entries

console.log(obj1.hasOwnProperty("name"));
console.log(obj1.hasOwnProperty("drd"));  // here output is false because hasOwnProperty will check for only keys








