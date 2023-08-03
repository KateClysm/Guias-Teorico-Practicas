import { createRequire } from "module";
const require = createRequire(import.meta.url);

const ejemplo = require('./ejemplo.json');

console.log(ejemplo);


import {add} from './math.js';




console.log(add(10,3));