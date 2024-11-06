#!/usr/bin/env node
import fs from 'fs/promises'
console.log(process.argv[2],process.argv[3])
fs.writeFile(process.argv[2],process.argv[3])
