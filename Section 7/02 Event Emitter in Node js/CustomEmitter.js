class EventEmitter {

    constructor() {
      this._events={}
    }
    on(eventName,eventFunc) {
        if(this._events[eventName]){
            this._events[eventName].push(eventFunc)
        }
        else{
            this._events[eventName] = [eventFunc];
        }    
    }
    emit(functionName,...arg){
        if(this._events[functionName]){
            this._events[functionName].forEach(fun => {
                fun(...arg);
            });
        }
    }
    once(functionName,eventFunc){
        if(this._events[functionName]){
           return;
        }
        else{
            this._events[functionName]=[eventFunc];
        }
    }
  }

  const emitter = new EventEmitter();
  emitter.once("ab",(a,b,c)=>{
      console.log("first ab",a,b,c)
    })
    emitter.once("ab",(a,b,c)=>{
        console.log("second ab")
    })
    
    emitter.emit("ab",12,234,54)
   
