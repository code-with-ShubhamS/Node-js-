// import fs from "fs/promises"

// const bufferes = await fs.readFile("Random.txt");
// console.log(bufferes);

function bufferToCharacter(buffer) {
    // Check if the input is a buffer
    if (!Buffer.isBuffer(buffer)) {
        throw new Error("Input must be a Buffer");
    }

    let result = '';

    // Iterate through each byte in the buffer and convert it to a character
    for (let i = 0; i < buffer.length; i++) {
        result += String.fromCharCode(buffer[i]);
    }

    return result;
}

// Example usage
const buffer = Buffer.from([65, 66, 67]); // Buffer containing ASCII values for 'A', 'B', 'C'
console.log(bufferToCharacter(buffer)); // Output: 'ABC'
