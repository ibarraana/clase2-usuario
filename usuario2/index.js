import Usuario from './Usuario.js'

// Creamos un usuario con el método estático
let usuarioNuevo = Usuario.crear("Ana Ibarra", "ana@gmail.com", 30)

// Mostramos datos en consola
console.log(usuarioNuevo.mostrarDatos())

// Verificamos el PIN actual
console.log("PIN correcto:", usuarioNuevo.verificarPin(1234)) // true
console.log("PIN incorrecto:", usuarioNuevo.verificarPin(9999)) // false

// Probamos cambiar el PIN
console.log("Cambio de PIN exitoso:", usuarioNuevo.cambiarPin(1234, 5678)) // true
console.log("PIN actualizado:", usuarioNuevo.verificarPin(5678)) // true
