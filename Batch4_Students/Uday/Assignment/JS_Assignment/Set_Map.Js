// // const set1 = new Set();
// // console.log(set1); //Set(0) {}

// // we can use set to remove duplicate valuie for array
// // how to convert array to set
// // let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1];

// // let set2 = new Set(arr);

// // console.log(set2); //Set(1) { 1 }

// let a = [1, 2, 3, 4];
// let b = [3, 4, 5, 6];

// let union = new Set([...a, ...b]);

// console.log(union);

// let mySet = new Set();

// console.log(mySet);

// let numbers = new Set([1, 2, 3, 4, 5]);

// console.log(numbers);

// let fruits = new Set();

// fruits.add("Apple");
// fruits.add("Banana");
// fruits.add("Mango");

// console.log(fruits);

// fruits.delete("Banana");

// console.log(fruits);

// let arr = [1, 2, 2, 3, 4, 4, 5];

// let uniqueArr = new Set(arr);

// console.log(uniqueArr);

// let a1 = [1, 2, 3, 4];
// let b1 = [3, 4, 5, 6];

// let union1 = new Set([...a1, ...b1]);

// console.log(union1);
// union1.add(1);
// console.log(union1);
// union1.delete(2);
// console.log(union1);

// let set1 = new Set([1, 2, 3, 4, 5]);
// let set2 = new Set([4, 5, 6, 7, 8]);

// let intersection = new Set(
//     [...set1].filter(value => set2.has(value))
// );

// console.log(intersection);

// let arr1 = [1, 2, 3, 4, 5, 6, 6];
// let arr2 = [4, 5, 6, 7, 8];

// let intersection = arr1.filter(value => arr2.includes(value));
// let result = new Set(intersection);
// console.log(result);

// let x = [1, 2, 3, 4, 5, 6, 6, 4];
// let y = [5, 6, 7, 8, 9];

// let setX = new Set(x);
// let setY = new Set(y);

// // let result = x.filter((num) => setY.has(num));

// // console.log(new Set(result));
// console.log(x);
// let uniqueX = [...new Set(setX)];
// console.log("Unique Elements in Array X:", uniqueX);
// let user = ["uday", "john", "sam"];
// let upperUser = user.map((users) => users.toUpperCase());
// console.log(upperUser);

// let num = [1, 2, 3, 4, 5];

// let db = num.map((n) => n * 2);
// console.log(db);

//  console.log(' my name is \'siddhant\' ')
//  Name= "siddhant"
// console.log(Name.repeat(2))
// let a = 12.1234;
// console.log(a.toFixed(3))
// console.log(Math.round(10.2))
// console.log(Math.round(10.5))
// console.log(Math.round(a))
//console.log(Math.floor(Math.random()*100)+1) 

// const dice1 = Math.floor(Math.random()*6)+1    // 1 --6
// const dice2 = Math.floor(Math.random()*6)+1   
// console.log(dice1,dice2)
// console.log(dice1+dice2)

// console.log(5+5)  // 10
// console.log("5"+5)  //55 
// console.log("5"+"5")//"55" 
// console.log("5"-5) //0
// console.log(5-"5")//0
// console.log("5"*5)//25
// console.log(5*5)//25
// console.log("5"-true)//4 true in coding represent value 1
// console.log("5"-false)//5 false in coding represent value 0
// console.log("5"+true)// string
// console.log("5"+false)//string

// let names_arr = ["sidddhant", "amol", "ruhsi", "shree", "vaibhav", "tejas"]

// let [s1, s2, s3, s4, s5, s6] = names_arr

// console.log(s3)
// console.log(s5)

let mypromise = new Promise((resolve, reject) => {
    let success =  true;

    if( success=== true){
        resolve("Promise Resolved")
    } else {
        reject("Promise Rejected")
    }
})
    mypromise.then((message) => {
        console.log(message)
     })
     .catch((error) => {
        console.log(error)

     })        

