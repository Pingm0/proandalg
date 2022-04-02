
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

insertAt = (arr,index,val) => {
    for(let i = arr.length -1 ; i >= index ; i--) {
        arr[i + 1] = arr[i]
    }
    arr[index] = val;
    console.log(arr)

}

insertAt([2,3,4,5],0,1)