// Buffer store data in binary but it represent in HexaDecimal Beacuse it take less space to represent it 

const a= new ArrayBuffer(4)
const view =  new DataView(a)

view.setInt8(0,0x32)
view.setInt8(1,0o62)
view.setInt8(2,0b110010)
view.setInt8(3,-2)

console.log(a)

// we have two method to get the value from the buffer one is signed another one is unsigned
console.log(view.getInt8(3))
console.log(view.getUint8(3))

// if we store the large value than their range than it will first convert the digit into binary and only take 8 bits


