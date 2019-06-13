//import './scss/style.scss'

const dotenv = require('dotenv');
dotenv.config();

console.log('print js file');

const port = process.env.PORT;
console.log(`Your port is ${port}`);