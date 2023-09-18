class Camiones {
constructor(
    marca,
    carroceria,
    modelo,
    precio,
    transmicion,
    asientos,
    medidas
){
    this.marca = marca
    this.carroceria = carroceria
    this.modelo = modelo
    this.precio = precio
    this.transmicion = transmicion
    this.asientos = asientos
    this.medidas = medidas

        this.info = `Marca: ${marca}, Carroceria: ${carroceria}, Modelo: ${modelo}, Precio: $${precio},
        Transmicion: ${transmicion}, Numero de Asientos: ${asientos}, Medidas: ${medidas} metros`

}
mostrarInfo(){
    console.log(this.info)
}
}

const camion1 = new Camiones(
    "Mercedes Benz",
    "Ayco",
    "Zafiro Sport G4",
    24623,
    "6 velocidades Manuales",
    40,
    12.5

)

camion1.mostrarInfo()