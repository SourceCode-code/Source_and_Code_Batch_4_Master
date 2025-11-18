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
Mahindra_3x0.color.push("sliver");
console.log(Mahindra_3x0);

Mahindra_3x0["color"].push("grey");
console.log(Mahindra_3x0);

//---------------------------LOOPS IN OBJECT

// Array loop

/**
 * let arr = []
 * for(let i=0;i<arr.length;i++){
 * console.log(arr[i])
 * }
 */

/**
 *Mahindra_3x0= {
  modelName: 'AX5',
  exShowroomPrice: 1200000,
  color: [
    'white',  'yellow',
    'red',    'black ',
    'green ', 'sliver',
    'grey'
  ],
  engineWarranty: '1 year',
  extendWarranty: '1 year'
}
 */

// LOOP OF OBJECT

for (let key in Mahindra_3x0) {
  console.log(`${key} == ${Mahindra_3x0[key]}`);
}

/**
modelName == AX5
exShowroomPrice == 1200000
color == white,yellow,red,black ,green ,sliver,grey
engineWarranty == 1 year
extendWarranty == 1 year
 * 
 */

//Object.assign()--> it will copy the object without modifying the original object

let car1 = Object.assign({}, Mahindra_3x0);
console.log(car1);

car1.modelName = "AX7";

console.log(car1);
console.log(Mahindra_3x0);

//Object.keys() --> gets all the keys form the object
// return type of this method is an array

let keyval = Object.keys(car1);

console.log(keyval);

// Object.values()-->gets all the values form the object

let objval = Object.values(car1);
console.log(objval);

// Object enteries --> gets all the value and keys form the object
let entryobj = Object.entries(car1);
console.log(entryobj);

/**
 * [
  [ 'modelName', 'AX7' ],
  [ 'exShowroomPrice', 1200000 ],
  [
    'color',
    [
      'white',  'yellow',
      'red',    'black ',
      'green ', 'sliver',
      'grey'
    ]
  ],
  [ 'engineWarranty', '1 year' ],
  [ 'extendWarranty', '1 year' ]
]
 */

//hasownpropetry() --> this used to check if object have a proprerty

console.log(car1.hasOwnProperty("Mileage"));

// complex real examples based on combination of array and object

const profiles = [
  {
    firstName: "Vihaan",
    lastName: "Mehta",
    age: 28,
    experience: 6,
    skills: ["TypeScript", "CI/CD"],
    position: "Automation Tester",
  },
  {
    firstName: "Rohan",
    lastName: "Joshi",
    age: 29,
    experience: 11,
    skills: ["TypeScript", "JavaScript", "Cypress", "Docker"],
    position: "Technical Lead",
  },
  {
    firstName: "Vihaan",
    lastName: "Deshmukh",
    age: 32,
    experience: 1,
    skills: ["Python", "TypeScript"],
    position: "Software Engineer",
  },
  {
    firstName: "Ishaan",
    lastName: "Pandey",
    age: 31,
    experience: 14,
    skills: ["Python", "Cypress"],
    position: "Systems Engineer",
  },
  {
    firstName: "Ishaan",
    lastName: "Deshmukh",
    age: 25,
    experience: 1,
    skills: ["Java", "Playwright", "JavaScript", "SQL"],
    position: "Systems Engineer",
  },
  {
    firstName: "Rohan",
    lastName: "Joshi",
    age: 33,
    experience: 3,
    skills: ["JavaScript", "Java", "Docker", "TypeScript"],
    position: "Full-Stack Developer",
  },
  {
    firstName: "Pranav",
    lastName: "Joshi",
    age: 24,
    experience: 2,
    skills: ["JavaScript", "GitHub Actions", "Playwright", "TypeScript"],
    position: "Data Analyst",
  },
  {
    firstName: "Rohan",
    lastName: "Nayak",
    age: 24,
    experience: 10,
    skills: ["JavaScript", "GitHub Actions", "Playwright"],
    position: "Backend Developer",
  },
  {
    firstName: "Arjun",
    lastName: "Nayak",
    age: 36,
    experience: 4,
    skills: ["Java", "Playwright", "Docker"],
    position: "Systems Engineer",
  },
  {
    firstName: "Vikram",
    lastName: "Joshi",
    age: 34,
    experience: 1,
    skills: "poython",
    position: "Full-Stack Developer",
  },
];

// get the name of person who has skill cypress

profiles.forEach((el, index, arr) => {
  // console.log(el)
  if (el.skills.includes("Cypress")) {
    console.log(`${el.firstName} ${el.lastName}`);
  }
});

//Rohan Joshi
// Ishaan Pandey

/** {
    firstName: "Vikram",
    lastName: "Joshi",
    age: 34,
    experience: 1,
    skills: "poython",
    position: "Full-Stack Developer",
  }, */

// print me the person details  who has more than 3 years of experiences

let above3 = profiles.filter((el, index, arr) => {
  return el.experience > 3;
});

console.log(above3)

/**
 [
  {
    firstName: 'Vihaan',
    lastName: 'Mehta',
    age: 28,
    experience: 6,
    skills: [ 'TypeScript', 'CI/CD' ],
    position: 'Automation Tester'
  },
  {
    firstName: 'Rohan',
    lastName: 'Joshi',
    age: 29,
    experience: 11,
    skills: [ 'TypeScript', 'JavaScript', 'Cypress', 'Docker' ],
    position: 'Technical Lead'
  },
  {
    firstName: 'Ishaan',
    lastName: 'Pandey',
    age: 31,
    experience: 14,
    skills: [ 'Python', 'Cypress' ],
    position: 'Systems Engineer'
  },
  {
    firstName: 'Rohan',
    lastName: 'Nayak',
    age: 24,
    experience: 10,
    skills: [ 'JavaScript', 'GitHub Actions', 'Playwright' ],
    position: 'Backend Developer'
  },
  {
    firstName: 'Arjun',
    lastName: 'Nayak',
    age: 36,
    experience: 4,
    skills: [ 'Java', 'Playwright', 'Docker' ],
    position: 'Systems Engineer'
  }
]
 */