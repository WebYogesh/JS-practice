// stack (primitive) , Heap (Non-Primitive)

let userOne ={
    email : "yogesh@gmail.com;"
}

let userTwo = userOne

userTwo.email = "Yogesh123@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);