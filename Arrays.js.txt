let myFavoriteNumbers = [9,2,8,3,7,4]
let myWords = ["red","orange","yellow"]
let myPets = [{name: "Meowsalot", species: "cat"}, {name: "Barksalot", species:"dog"}]

myWords.push("green")  //added green to array
console.log(myWords)  //output results into console

myWords.splice(1,1)  //remove object from array. 1 = orange in this example; the second "1" = number of objects to remove. Arrays are 0 based, so the count starts at 0, not one. 
console.log(myWords)

console.log(myFavoriteNumbers[3])
console.log(myPets[1].species)