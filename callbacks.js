// We're used to this
function add (num1, num2) {
  return num1 + num2
}

const sum = add(2, 3)
console.log(sum)


//-----------------------
// TODO: With the callback pattern
function callbackAdd (num1, num2, cb) {
  const sum = num1 + num2
  if (sum === 9) {
    const err = new Error("Eww, 9??")
    cb(err)
  } else {
    cb(null, sum)  
  }
}

callbackAdd(5, 6, (total) => {
  if (err) {
    console.log(err.message)
  } else {
    console.log(total)
  }
})