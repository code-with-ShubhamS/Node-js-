// What is the difference btw module.exports and exports 

// console.log(module.exports===exports) True;

const user={
    name:"shubham",
    age:25,
    address:{
        pincode:12345,
        city:"Dehradun",
    },
    hobby:["IT","Teacher","Coder"]
}

let address = user.address; //copying the refrences to address
// console.log(address===user.address)

// address.state="Uttarakhand";  //update the user 


address={  //so here we are changing the refrence and asign a new value to the address which is not change the original user 
    pincode:1200000000,
    city:"LK",
}
console.log(user);
console.log(address);


// conclusion : you can use modulue.exports not exports.Because exports not updating a module.exports it will create a new obj for itself. and file only export the module.exports data;