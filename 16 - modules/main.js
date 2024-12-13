import { getRandomDogImage } from "./modules/dogapi.js";
import { displayImage } from "./modules/display.js";

// det räcker med simpelt import export för slutprojektet
// import defaultFunction from "./modules/default.js";
import newName, {a as c, b} from "./modules/default.js";
import * as obj from "./modules/default.js";

getRandomDogImage().then( displayImage )


// defaultFunction();
newName();
console.log(c, b) //c innehåller a

console.log(obj)
obj.default();