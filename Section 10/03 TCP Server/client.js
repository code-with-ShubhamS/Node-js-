import net from "node:net"

// Create a TCP client
const client = new net.Socket();
// const client = net.createConnection({port:4999,host:"192.168.1.5"})



// Connect to the server
client.connect(4999, "192.168.1.5", () => {
    console.log(`Connected to server at 192.168.1.5  4999`);

    // Send a message to the server
    const message = 'Hello, Server!';
    client.write(message);
    console.log(`Sent to server: ${message}`);
});

// Handle data received from the server
client.on('data', (data) => {
    console.log(`Received from server: ${data.toString()}`);

    // Optionally close the client after receiving a response
    // client.end();   
});

// Handle the client closing
client.on('close', () => {
    console.log('Connection closed.');
});

// Handle errors
client.on('error', (err) => {
    console.error(`Connection error: ${err.message}`);
});
