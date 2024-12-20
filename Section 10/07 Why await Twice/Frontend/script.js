// Data come from server in two parts headers and actual data first fetch is for header and second one if for actual data.
const response = await fetch("http://192.168.1.2:4000/")
console.log("response")

// const data = await response.text(); //when we get all data after that we are printing on screen 
// console.log(data);

const textDecoder = new TextDecoder();
for await (const chunk of response.body){ //so here it will not wait for all data .as fast he get data he will print it . like chatgpt
    console.log(chunk)
}