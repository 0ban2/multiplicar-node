const { tablaAlDiez } = require("./helpers/multiplicar");
const argv = require('./config/yargs');

const {base, listar, hasta} = argv;

tablaAlDiez(base, listar, hasta)
  .then(console.log)
  .catch(console.log);
