export default class Usuario {
    nombre
    email
    edad
    #pin

    constructor(nombre, email, edad) {
        this.nombre = nombre
        this.email = email
        this.edad = edad
        this.#pin = 1234 // valor por defecto
    }

    // Método estático para crear un usuario
    static crear(nombre, email, edad) {
        return new Usuario(nombre, email, edad)
    }

    mostrarDatos() {
        return `Nombre: ${this.nombre}, Email: ${this.email}, Edad: ${this.edad}`
    }

    verificarPin(pin) {
        return this.#pin === pin
    }

    // Nuevo método para cambiar el pin
    cambiarPin(actual, nuevo) {
        if (this.#pin === actual) {
            this.#pin = nuevo
            return true
        } else {
            return false
        }
    }
}
