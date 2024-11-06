
// function firstTask(callback) {
//     setTimeout(function() {
//       console.log("First task done!");
//       callback();
//     }, 1000);
//   }
  
//   function secondTask(callback) {
//     setTimeout(function() {
//       console.log("Second task done!");
//       callback();
//     }, 1000);
//   }
  
//   function thirdTask(callback) {
//     setTimeout(function() {
//       console.log("Third task done!");
//       callback();
//     }, 1000);
//   }
//   console.time()
//   // Callback Hell
//   firstTask(function() {
//     secondTask(function() {
//       thirdTask(function() {
//         console.log("All tasks completed!");
//         console.timeEnd()
//       });
//     });
//   });

function firstTask() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("First task done!");
        resolve();
      }, 1000);
    });
  }
  
  function secondTask() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Second task done!");
        resolve();
      }, 1000);
    });
  }
  
  function thirdTask() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Third task done!");
        resolve();
      }, 1000);
    });
  }
  
  async function executeTasks() {
    console.time()
    await Promise.all([firstTask(), secondTask(), thirdTask()]);
    console.log("All tasks completed in 1 second!");
    console.timeEnd()
  }
  
  executeTasks();
  
  

