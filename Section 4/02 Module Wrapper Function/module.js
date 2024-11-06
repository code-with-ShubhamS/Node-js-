// Module wrapper function is a IIFE function which  wrap the code inside a function callled module wrapper function 

// (function (exports, require, module, __filename, __dirname) {
//     // Module code here 
// });

//we put our code inside Module wrapper function so the code have an function scope that will not go to globally .Thats the reasons we can use exports, require, module, __filename, __dirname with in the file.


// When Node. js loads a module, it wraps the module code in a function before executing it. This function is called the "module wrapper function" and is used to encapsulate the module code.

// By wrapping the module code in a function, Node. js provides a level of abstraction that prevents variables and functions defined in one module from interfering with variables and functions defined in another module 
