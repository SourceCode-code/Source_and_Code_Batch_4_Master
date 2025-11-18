let Toyota_Fortuner = {
  modelName: "Legender",
  exShowroomPrice: 4800000,
  colors: ["white", "black", "silver", "brown"],
  makeYear: 2024,
  isAvailable: false,
};

console.log(Toyota_Fortuner.modelName)
console.log(Toyota_Fortuner["modelName"])

Toyota_Fortuner.exShowroomPrice=5000000
console.log(Toyota_Fortuner)

Toyota_Fortuner["exShowroomPrice"]=6000000
console.log(Toyota_Fortuner)

delete Toyota_Fortuner.makeYear
console.log(Toyota_Fortuner)

delete Toyota_Fortuner["isAvailable"]
console.log(Toyota_Fortuner)

Toyota_Fortuner.makeYear=2025
console.log(Toyota_Fortuner)

Toyota_Fortuner["engineWarrenty"]="1 Year"
console.log(Toyota_Fortuner)

console.log(Toyota_Fortuner.colors[0])

Toyota_Fortuner["colors"].unshift("grey")
console.log(Toyota_Fortuner)

Toyota_Fortuner["colors"].shift("grey")
console.log(Toyota_Fortuner)

Toyota_Fortuner["colors"].push("grey")
console.log(Toyota_Fortuner)

Toyota_Fortuner["colors"].pop("grey")
console.log(Toyota_Fortuner)