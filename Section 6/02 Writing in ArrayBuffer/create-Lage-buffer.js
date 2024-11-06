const a= new ArrayBuffer(1*1024*1024*1024)
const view =  new DataView(a)

for (let index = 0; index < view.length; index++) {
    view.setInt8(i,i+1)
}