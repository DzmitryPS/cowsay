const information = require("./information");
const cowsay = require("cowsay");
const test = "yes";
console.log(cowsay.say({text : `Hello ${information.name} from ${information.campus}`}));