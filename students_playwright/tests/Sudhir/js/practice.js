// // change every second word to uppercase

// //input = My Name is Sayali Sagar
// //Output = mY nAme iS sAyali sAgar

let input = 'Sudhir is my name'

let wordArray = input.split(" ")

let newword = []

for (let i = 0; i < wordArray.length; i++) {

    let word = wordArray[i]

    if (word.length >= 2) {
        let lowerCaseW = word.toLowerCase()
        
        let transform= lowerCaseW[0]+lowerCaseW[1].toUpperCase()+lowerCaseW.slice(2)

        newword.push(transform)

        

    }


}
console.log(newword.join(' '))


