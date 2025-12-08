// print 10 to 1 
// for (let i = 10; i >= 1; i--) {
//     console.log(a)
// }


// print each charcater of string on new line 

// let str = "happy diwali" 

// for (let i = 0; i < str.length-6; i++) {
//     console.log(str[i])
// }

// for(let i=20;i>=0;i--){
//     console.log(i)
// }

let Mahindra_3x0 = {
  //key      : value
  modelName: "AX5",
  exShowroomPrice: 1300000,
  color: ["white", "yellow", "red", "black ", "green "],
  make: 2025,
  isAviable: true,
}

let mycar=Object.assign({},Mahindra_3x0)
console.log(mycar)

let keyval = Object.keys(mycar)
console.log(keyval);

let objval = Object.values(mycar)
console.log(objval);

let arryobj=Object.entries(mycar)
console.log(arryobj[2][1])


// let Secondcar=Object.assign({},Mahindra_3x0)
// console.log(Secondcar)


// for (let key in Mahindra_3x0) {
//   console.log(`${key}: ${Mahindra_3x0[key]}`);
// }

// {
//   //key      : value
//   modelName: "AX5",
//   exShowroomPrice: 1300000,
//   color: ["white", "yellow", "red", "black ", "green "],
//   make: 2025,
//   isAviable: true,
// }

// Mahindra_3x0[0]["color"].push("blue")
// Mahindra_3x0[1]["color"].push("pink")
// console.log(Mahindra_3x0)

// console.log(Mahindra_3x0.make)//dot nonation  // exctarct
// console.log(Mahindra_3x0["make"])

// delete Mahindra_3x0.make // delete
// console.log(Mahindra_3x0)

// Mahindra_3x0["carcolor"]="Green"
// console.log(Mahindra_3x0)

