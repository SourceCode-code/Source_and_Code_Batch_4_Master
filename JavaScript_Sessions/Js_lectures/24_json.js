//JSON -->JAVASCRIPT OBJECT NOTATION

// JSON is used to send the data from client side to server side and vice versa (rest data is it given by json )
// JSON is alerantive to xml

//Automation perperctive

// automated testcases that will have some data and that will always be passed form json

let user = {
  name: "siddhant",
  middlename: "arjun",
  lastname: "gadakh",
};

/**
  example of json 

{
  "name": "siddhant",
  "middlename": "arjun",
  "lastname": "gadakh"
};


 */

// conversion

//parse()--> this method is used to convert your json data into js object data

let data1 = `{
  "name": "siddhant",
  "middlename": "arjun",
  "lastname": "gadakh"
}`;

let objdata1 = JSON.parse(data1);
console.log(objdata1);

//{ name: 'siddhant', middlename: 'arjun', lastname: 'gadakh' }

let data2 = `{
"id":1234,
"name":"amol",
"postion":"software engineer"
}`;

let objdata2 = JSON.parse(data2)
console.log(objdata2)
//{ id: 1234, name: 'amol', postion: 'software engineer' }

// stringify()--> this method is used to convert your object into json data 



let json_data_1= JSON.stringify(objdata1)
console.log(json_data_1)

/**{"name":"siddhant","middlename":"arjun","lastname":"gadakh"} */

// ex --2 


let user1={
    firstname:"asabeneh",
    lastname:"yeta",
    country:"finland",
    city:"helsinki",
    email:"alex@alex.com",
    skills:["html","css","js"],
    age:35,
    islogin:true
}


// convert the data into json file but except skills , age , islogin


let user1_data = JSON.stringify(user1,["firstname","lastname","country","city","email","skills"])
console.log(user1_data)


/**
 * 
 * {"firstname":"asabeneh","lastname":"yeta","country":"finland","city":"helsinki","email":"alex@alex.com","skills":["html","css","js"],"age":35,"islogin":true}
 */


// object creation 

// oops --> OBJECT ORIENTED PROGRAMING STRUCTURE

//INHERITANCE 
//ABSCRATION 
//ENCAPLUSION 
//PLOYMORPHISM