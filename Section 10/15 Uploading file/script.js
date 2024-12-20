const input = document.querySelector("input");
input.addEventListener("change", async (e) => {
  let file = e.target.files[0]; //it automatically send data into chunks

//   const response = await fetch("http://192.168.1.4:4000/", {
//     method: "POST",
//     body: file,
//     headers: {
//       filename: file.name,
//     },
//   });
//   const data = await response.text();
//   console.log(data);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://192.168.1.4:4000/", true); //true means asyncronous

  xhr.setRequestHeader("filename",file.name)
  xhr.addEventListener("load",(e)=>{
    console.log(xhr.response)
  })
  xhr.upload.addEventListener("progress",(e)=>{
    console.log(Math.floor((e.loaded/e.total)*100))
  })
  xhr.send(file)
});
