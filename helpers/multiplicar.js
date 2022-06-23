const fs = require('fs');
const colors = require('colors');

const tablaAlDiez = async (num = 0, listar, hasta = 10) => {
  try {
    let salida = `=============================================
  =============== TABLA DEL ${num} =================
  =============================================`;
    let consola = `=============================================
  =============== TABLA DEL ${num} =================
  =============================================`;
    for (let index = 1; index <= hasta; index++) {
      salida += ` \n${num} x ${index} =  ${index * num}`;
      consola += ` \n${num} ${'x'.green} ${index} ${'='.red}  ${index * num}`;
    }
    listar && console.log(consola);
    fs.writeFileSync(`salida/tabla-${num}.txt`, salida);
    return `tabla-${num}.txt creada correctamente`.rainbow;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  tablaAlDiez
}