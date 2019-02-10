function createMultiplier(multiplier){
  return function(x){
    return x * multiplier
  }
}

let doubleMe = createMultiplier(2)
let tripleMe = createMultiplier(3)
let quadrupleMe = createMultiplier(4)

document.write(tripleMe(10))


//higher order function

let myColors = ['red', 'orange', 'yellow']

myColors.forEach(saySomethingNice)

function saySomethingNice(color){
  document.write("The color " + color + " is a great color. <br>")
}