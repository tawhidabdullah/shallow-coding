/*

ekhane  LA ekti Linear array, jar Lb hocche lower bound and UB hocche Upper bound and, ey Algorithm ti process
operationer maddome La er protiti upaaDanke traverse kore, 


1.[Initialize Counter] Set K : = LB
2.Repeat step 3 and 4 while K <= UB.
3.[Visit element]
Apply process on LA[K]
[increase Counter] K : = K + 1
5. End of Step-2 Loop


////////////////////////////////////////////////////////
let LA = [1,2,3,4];
let LB = 0; 
let UB = lA.length; 

let k = LB; 
while(k <= UB){
    console.log(`This number: ${LA[k]}`); 
    k = k + 1; 
}




*/

let LA = [1,2,3,4]; // array 
let LB = 0; 
let UB = LA.length - 1; 

let k = LB; 
while(k <= UB){
    console.log(`This number: ${LA[k]}`); 
    k = k + 1; 
}


