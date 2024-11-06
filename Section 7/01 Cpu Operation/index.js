async function fetchData() {
    console.log("1. Start fetching data...");
  
    // Simulate an async operation like fetching from a database or an API
    const data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve("Fetched data!");
      }, 2000);  // Simulating 2 seconds delay
    });
  
    console.log("2. Data received:", data);
  
    console.log("3. Continue with other operations.");
  }
  
  fetchData();
  
  console.log("4. This will print before data fetching completes.");