class Animales{
    constructor(
        especie,
        raza,
        numPatas,
        color,
    ){
        this.especie = especie
        this.raza = raza
        this.numPatas =  numPatas
        this.color = color 

        this.info = `Mi especie es ${especie} y soy de la raza ${raza}, tengo ${numPatas} patas, y mi color es ${color}`
    }
    mostrarInfo(){
        console.log(this.info)
    }

    grasar(){
        console.log("pipipipipip pipipip pipipip")
    }
}

class Perro extends Animales{
    constructor(raza,numPatas,color,tamano,cola){ 
        super(raza,numPatas,color) //clase heredada

        this.tamano = tamano
        this.cola = cola

        this.info = `Mi raza es ${raza} mi tamaño es ${tamano}, tengo ${numPatas} patas, mi color es ${color}, y mi cola es ${cola}`
    } 
    lardar(){
            console.log("miau")
        }
    comer(){
        console.log("ñam")
    }

    mostrarInfoPerro(){
        console.log(this.info)
    }
}


const animal1 = new Animales("Ave", "Cardenal", 2, "rojo")
const animal2 = new Animales("Mamifero", "Perro", 4, "Cafe")
const pitbull1 = new Perro("Pitbull", 4, "cafe", "grande", "larga")

animal1.mostrarInfo()
animal1.grasar()

pitbull1.mostrarInfoPerro()