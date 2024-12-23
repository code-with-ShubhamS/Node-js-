import express from "express";
const app = express();

// get define the get request(method)
app.get(
  "/",
  (req, res,next) => {
    // Req handler middleware 2params or 3 params
    console.log("shubham 1");
    // next("err")
    // Whaterver we write after next it will execute after the next function is completed
    res.write("shubham 1");
},
  (err,req, res,next) => {
    // Erorr handler middleware 4params run only when we pass something in next function as a error or if we write it at the end of if any erorr comes from any route it will handle it 
    console.log("Erorr");
    res.end("Erorr 1");
},
// Req handler middleware 2params or 3 params
  (req, res,next) => {
    console.log("shubham 2")
    res.write("shubham 2")
  }
);

app.listen(4000, () => {
  console.log("Listening on port 4000");
});


// here the erorr middle ware only run when we get error on get method(/) because it is inside of it 





// Middleware in Node.js refers to functions that execute before sending response and after request. These functions have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.

// Application-level middleware: Bound to an instance of the express object.
// Router-level middleware: Bound to an instance of express.Router().
// Error-handling middleware: Specifically designed to handle errors.
// Built-in middleware: Provided by Express (e.g., express.json(), express.static()).
// Third-party middleware: Installed via npm (e.g., cors, body-parser).
