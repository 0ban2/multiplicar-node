const argv = require('yargs')
	.option('b', {
		alias: 'base',
		demandOption: true,
		describe: 'Es la base de la tabla de multiplicar',
		type: 'number'
	})
	.option('h', {
		alias: 'hasta',
		default: 10,
		describe: 'Es hasta que número se multiplicará la base',
		type: 'number',
	})
	.option('l', {
		alias: 'listar',
		describe: 'Muestra la tabla en la consola',
		type: 'boolean',
		default: false
	})
	.check((argv, options) => {
		if (isNaN(argv.base)) {
			throw 'la base debe ser un número';
		} else if (isNaN(argv.hasta)) {
			throw 'el hasta debe ser un número';
		}
		return true;
	}).argv;

module.exports = argv;