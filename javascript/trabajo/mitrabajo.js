class Vehiculos{
    constructor(
        Marca,
        Modelo,
        Trasmicion,
        Velocidad,
        
    ){
        this.Marca = Marca
        this.Modelo = Modelo
        this.Trasmicion = Trasmicion
        this.Velocidad = Velocidad

        this.info = `Marca del auto: ${Marca}, modelo: ${Modelo}, Trasmicion: ${Trasmicion}, Velocidad maxima: ${Velocidad} km`
    }

    Avanzar(){
        console.log("avanzar")
    }
    mostrarInfo(){
        console.log(this.info)
    }

}

class Autobus extends Vehiculos{
    constructor(
        Marca,
        Modelo,
        Carroceria,
        Trasmicion,
        Velocidad,
        NumAsientos,
        Tamano
    ){
        super(
            Marca,
            Modelo,
            Trasmicion,
            Velocidad
        )
        this.Carroceria = Carroceria
        this.NumAsientos = NumAsientos
        this.Tamano = Tamano

        this.info = `Marca del autobus: ${Marca}, Modelo: ${Modelo}, Carroceria: ${Carroceria}, Trasmicion: ${Trasmicion}, Velocidad Maxima: ${Velocidad} km, Numero de asientos ${NumAsientos}, Tamaño del camion: ${Tamano} Metros`
    }
    AbrirPuerta(){
        console.log("Abre puerta de atras")
    }

    mostrarInfoAutobus(){
        console.log(this.info)
    }
}

class Camion extends Vehiculos{
    constructor(
        Marca,
        Modelo,
        Trasmicion,
        Velocidad,
        Tipo,
        tamano
    ){
        super(
            Marca,
            Modelo,
            Trasmicion,
            Velocidad
        )
        this.Tipo = Tipo
        this.tamano = tamano

        this.info = `Marca del camion: ${Marca}, Modelo: ${Modelo}, Trasmicion ${Trasmicion}, Velocidad: ${Trasmicion} km, Tipo de camion: ${Tipo}, Tamaño del camion: ${tamano} metros `
    }

    Cargar(){
        console.log("El camion carga materiales")
    }
    mostrarInfoCamion(){
        console.log(this.info)
    }
}

class Moto extends Vehiculos{
    constructor( 
        Marca,
        Modelo,
        Trasmicion,
        Velocidad,
        NumLlantas,
        Altura,
        ){
        super(
            Marca,
            Modelo,
            Trasmicion,
            Velocidad,)
            this.NumLlantas = NumLlantas
            this.Altura = Altura

            this.info = `Marca de la moto ${Marca}, Modelo: ${Modelo}, Trasmicion: ${Trasmicion}, Velocidad: ${Velocidad} km , NumLlantas: ${NumLlantas}, Altura de la moto: ${Altura} metros  `
    }
    chocar(){
        console.log("choca y muere")
    }

    mostrarInfoMoto(){
        console.log(this.info)
    }
}

const vehiculo1 = new Vehiculos("BMW", "M3 GTR", "6 velcidades manuales", 310)
const autobus1 = new Autobus("Mercedes Benz", "Urbanus Plus 5", "Busscar", "6 Velocidades Automatizadas", 120, 30, 10 )
const moto1 = new Moto("Italika", "2017", "5 velocidades manuales", 200, 2, 3)
const camion1 = new Camion("Scania", "2022", "12 velocidades automatizadas", 120, "Europeo", 6)

vehiculo1.mostrarInfo()
autobus1.mostrarInfoAutobus()
camion1.mostrarInfoCamion() 
moto1.mostrarInfoMoto()
