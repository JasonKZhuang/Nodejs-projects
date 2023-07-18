// import package the traditional way is to use require function
// const fs = require("fs");

//to use this, we need to change "type": "module" in package.js file
import fs from "fs";
import {hey} from "./helper.js"
console.log(hey)