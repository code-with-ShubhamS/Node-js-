import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let URL = "http://[2401:4900:1f3a:695e:94f0:79a9:5c91:1cab]/"
  const [data, setData] = useState();
  const [fileChoseName,setFileName] = useState("No file Chosen")
  const [oldName, setOldName] = useState("");
  const [newName, setNewName] = useState("");
  const [loading, setLoading] = useState(true);
  const [uploading, setuploading] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showEditContainer, setEditContainer] = useState(false);
  async function getDirectoryData() {
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          console.log(data);
          setData(data);
        } else {
          console.log("fetch req");
        }

        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }
  useEffect(() => {
    getDirectoryData();
  }, []);

  function uploadFile(e) {
    if(e.target.files[0]){
      setFileName(e.target.files[0].name)
    }
    // e.target.files[0]?.name || "No file chosen";
    let file = e.target.files[0];
    console.log(file);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", URL, true); //true means asyncronous
    setuploading(true);
    xhr.setRequestHeader("filename", file.name);
    xhr.addEventListener("load", (e) => {
      console.log(xhr.response);
      getDirectoryData();
      setuploading(false);
      setFileName("No file Chosen")
    });
    xhr.upload.addEventListener("progress", (e) => {
      setProgress(Math.floor((e.loaded / e.total) * 100));
    });
    xhr.send(file);

  }

  async function handleDelete(file) {
    console.log("delete call");
    let response = await fetch(URL, {
      method: "DELETE",
      headers: {
        filename: file,
      },
    });
    let data = await response.text();
    getDirectoryData();
    console.log(data);
  }

  async function renameTitle() {
    console.log(oldName, newName);

    let response = await fetch(URL, {
      method: "PATCH",
      body: JSON.stringify({ oldName, newName }),
    });
    let data = await response.text();
    setNewName("");
    getDirectoryData();
    console.log(data);
  }
  return (
    <>
      <h1>File Manager</h1>

<div>
      <div className="container">
        {loading === false &&
          data.map((item, idx) => (
            <div className="file-list" key={idx}>
              <div className="file-item">
                <span> {item}</span>
                <div className="file-actions">
                  <a href={`${URL}${item}?action=open`}>
                    Open
                  </a>
                  <a href={`${URL}${item}?action=download`}>
                    download
                  </a>
                  <button
                    onClick={() => {
                      setNewName(item);
                      setOldName(item);
                      setEditContainer(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(item);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}

        {/* <!-- Upload Section --> */}
        <div className="upload-section">
          {/* Edit Container */}
          {showEditContainer && (
            <div className="editContainer" style={{margin:"1rem 0px"}}>
              <label htmlFor="file-name">Rename File</label>
              <input
                type="text"
                id="file-name"
                placeholder="Enter new file name"
                value={newName}
                onChange={(e) => {
                  setNewName(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  renameTitle();
                  setEditContainer(false);
                }}
              >
                Rename
              </button>
            </div>
          )}


<div className="upload-container">
    <label htmlFor="file-upload" className="upload-button">Upload File</label>
    <span className="file-label">{fileChoseName}</span>
    <input type="file" id="file-upload" style={{display: "none"}} onChange={(e)=>{uploadFile(e)}}/> <br />
          {uploading && <p style={{fontSize:"1rem",marginLeft:"1rem"}}>Uploading {progress}%</p>}
  </div>
        </div>
      </div>
      </div>
      <div className="footer">
        &copy; 2024 File Manager. All rights reserved.
      </div>
    </>
  );
}

export default App;
