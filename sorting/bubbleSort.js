// let bubbleSort = (inputArr) => {
//     let len = inputArr.length; 
//     let len = inputArr.length;
//     let swapped;
//     let swapped; 
//     do {
//         swapped = false;
//         for (let i = 0; i < len; i++) {
//             if (inputArr[i] > inputArr[i + 1]) {
//                 let biggerOne = inputArr[i];
//                 let smallerOne = inputArr[i + 1]; 
//                 inputArr[i] = smallerOne; // inputArr[i] = smallerone
//                 inputArr[i + 1] = biggerOne;
//                 swapped = true;
//             }
//         }
//     } while (swapped);
//     return inputArr;
// };




let bubbleSort = (inputArr) => {
    let len = inputArr.length; 
    let swapped;
    do {
      swapped = false;
      for(let i = 0; i < len; i++){
          if(inputArr[i] > inputArr[i+1]){
              let biggerOne = inputArr[i]; 
              let smallerOne = inputArr[i+1]; 
              inputArr[i] = smallerOne; 
              inputArr[i+1] = biggerOne; 
              swapped = true; 
          }
      }

    } while (swapped);
    return inputArr;
};

console.log(bubbleSort([1, 4, 2, 8, 2, 5]));


/*


DSA BUBBLE SORT : => 
 Algorithm: (Bubble Sort) BUBBLE (DATA,N)
 ekhane Data hocche N upaDan bisistho array, ay algoritemom Data er upadansomuhoke assending sojjitto kore,

 1: k = 1 to N -1 projonto 2 and 3 step Repeat hobe 
 2: Set PTR = 1
 3: PTR <= N - k projonto (while) loop Repeat hobe.
    a) if DATA[PTR] > DATA[PTR + 1] then,
        DATA[PTR] and DATA[PTR + 1] porospor sthan poriborton korbe, [end of if structure]
        b0 Set Ptr: = PTR + 1. [inner Loop end];
       [Step 1 Outer loop end ] 

4: Exit    =>>  






 */