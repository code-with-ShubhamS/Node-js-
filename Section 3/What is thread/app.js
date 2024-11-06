//Every loop take 1 sec and if we run program it take 3 sec to complete the execution but using thread we can run all the loops parallel so they take only 1 sec 
// console.time();
// for(let i=0;i<1000000000;i++){
//     if(i%500000000==0){
//         console.log(i)
//     }
// }
// for(let i=0;i<1000000000;i++){
//     if(i%500000000==0){
//         console.log(i)
//     }
// }
// for(let i=0;i<1000000000;i++){
//     if(i%500000000==0){
//         console.log(i)
//     }
// }
// console.timeEnd()  
const {Worker}= require("worker_threads")
new Worker('./a')
new Worker('./b')
new Worker('./c')


// open task manager to see the processes 