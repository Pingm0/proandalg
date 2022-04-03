
// pushFront = (arr,val) => {
//     for (let i = arr.length; i > 0 ; i--) {
//         arr[i] = arr[i-1]
//     }
//     arr[0] = val
//     console.log(arr)
//     return arr

// }
// pushFront([2,3,4,5,6],1)

// //////////////////////// //
// //////////////////////// //

// popFront = (arr) => {

//     let val = arr[0]
//     for (let i = 0 ; i < arr.length  ; i++) {
//         arr[i] = arr[i + 1]
//     }
//     arr.pop()

//     console.log(arr)
//     console.log(val)
//     return val;
// }

// popFront([1,2,3,4,5])

// insertAt = (arr,index,val) => {
//     for(let i = arr.length -1 ; i >= index ; i--) {
//         arr[i + 1] = arr[i]
//     }
//     arr[index] = val;
//     console.log(arr)

// }

// insertAt([2,3,4,5],0,1)

const removeAt = (arr,index) => {

    const val = arr[index]

    for (let i = index ; i < arr.length ; i++) {
        if (i >= index) {
            arr[i] = arr[i+1]
        }

    }
    arr.pop()

return val
}


// console.log(removeAt([1,2,3,4,5,6,7],4))

// const swapPairs = (arr) => {
//     for (let i = 0; i < arr.length -1; i +=2 ) {
//         const temp = arr[i]
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
        
//     }
//     return arr;
// }
// console.log(swapPairs([1,2,3,4,5,6,7]))

function removeDups (arr) {
    let first= arr[0]
    for(let i = 1; i < arr.length;i++){
        if (first === arr[i]){
            removeAt(arr,i)
        }
        first = arr[i]
        console.log(arr[i])
}
console.log(arr)
}

removeDups(["mohammed","jamal","jamal","mohammed","manal","manal"])