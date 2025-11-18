//OOPS --> object oriented programing

// what is an object
// object is a describtive datatype
// Object --> object is a container in javascript used to store the values in key and value pair
// object are non primitive data types that allows us to group related data and functions
// object is idemtified by {}
// every value in object is seprated by comma
// examples -->
// eaxmple of array
// let arr =["siddhant",7020400749, 25,"gadakh"]

//example of object

let Mahindra_3x0 = {
  //key      : value
  modelName: "AX5",
  exShowroomPrice: 1300000,
  color: ["white", "yellow", "red", "black ", "green "],
  make: 2025,
  isAviable: true,
};

// object has hidden propties --> prototype
// object will have proprties that in key and value pair

// there are 2 way to perform an operation in a object
//1 dot notation
//2 barcket notation

// why do we need bracket notation when we have dot notation
// because dot notataion doesnt work in loop for object

// retrieve
//dot notation
console.log(Mahindra_3x0.modelName); //AX5

//bracket notation
console.log(Mahindra_3x0["modelName"]); //AX5

// update

//dot notation
Mahindra_3x0.exShowroomPrice = 1200000;
console.log(Mahindra_3x0);

/**
 * {
  modelName: 'AX5',
  exShowroomPrice: 1200000,
  color: [ 'white', 'yellow', 'red', 'black ', 'green ' ],
  make: 2025,
  isAviable: true
} 
 */

//bracket notation
Mahindra_3x0["make"] = 2024;
console.log(Mahindra_3x0);

/**
 {
  modelName: 'AX5',
  exShowroomPrice: 1200000,
  color: [ 'white', 'yellow', 'red', 'black ', 'green ' ],
  make: 2024,
  isAviable: true
}
 */

// delete
////dot notation

delete Mahindra_3x0.isAviable;
console.log(Mahindra_3x0);

/**
{
  modelName: 'AX5',
  exShowroomPrice: 1200000,
  color: [ 'white', 'yellow', 'red', 'black ', 'green ' ],
  make: 2024
}
 */

//bracket notation

delete Mahindra_3x0["make"];
console.log(Mahindra_3x0);
/**
 * {
  modelName: 'AX5',
  exShowroomPrice: 1200000,
  color: [ 'white', 'yellow', 'red', 'black ', 'green ' ]
}
 */

// add

//dot notation
Mahindra_3x0.engineWarranty = "1 year";
console.log(Mahindra_3x0);

/**
 * {
  modelName: 'AX5',
  exShowroomPrice: 1200000,
  color: [ 'white', 'yellow', 'red', 'black ', 'green ' ],
  engineWarranty: '1 year'
} 
 */

//bracket notation

Mahindra_3x0["extendWarranty"] = "1 year";
console.log(Mahindra_3x0);

/**
{
  modelName: 'AX5',
  exShowroomPrice: 1200000,
  color: [ 'white', 'yellow', 'red', 'black ', 'green ' ],
  engineWarranty: '1 year',
  extendWarranty: '1 year'
}
 */

// dot
console.log(Mahindra_3x0.color[0]);

// barcket notation
console.log(Mahindra_3x0["color"][1]);

//
Mahindra_3x0.color.push("sliver")
console.log(Mahindra_3x0)

Mahindra_3x0["color"].push("grey")
console.log(Mahindra_3x0)