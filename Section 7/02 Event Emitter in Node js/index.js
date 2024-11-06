import EventEmitter from 'events'
//it is a class 

const emitter = new EventEmitter();

// h1.addEventLishner("click",()=>{

// })
// emitter.setMaxListeners() set the maximum eventLishner which have same name
emitter.on("abc",()=>{
    console.log("Abc event is fired ")
})
emitter.on("b",()=>{
    console.log("b event is fired ")
})

emitter.on("c",()=>{
    console.log("c event is fired ")
});

emitter.once("once",()=>{
    console.log("Run only one time ")
})

emitter.emit("once")
emitter.emit("once")
emitter.emit("once")


emitter.emit("abc")
emitter.emit("abc")
emitter.emit("abc")


//ALl the events are store in array 