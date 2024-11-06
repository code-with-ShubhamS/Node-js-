const a = new Uint8Array(8) 
a[0]=100;
a[1]=102;
a[2]=65;
a[3]=70;
a[4]=75;
a[5]=80;
a[6]=90;

const decoder= new TextDecoder('utf-8')
console.log(decoder.decode(a));