//polimorfismo, herencia, abtraccion, encapsulamiento
/*
    * class = clase ~fabeica 
    * construcctor = maquinas de una fabrica 
    * parametros = atributos 
    * objeto = this 
    * this.propiedad = parametros
    * imstancias  = clase(paramentros)
*/

class PikachuPC {
    constructor(
        gabinete,
        motherboard,
        procesador,
        discoDuro,
        ram,
        fuente,
        tarjetaDevideo,
        precio
    ){
this.gabinete = gabinete
this.motherboard = motherboard
this.procesador = procesador 
this.discoDuro = discoDuro
this.ram = ram
this.fuente = fuente
this.tarjetaDevideo = tarjetaDevideo
 this.precio = precio

        this.info = `gabinete: ${this.gabinete}, precio: $ ${this.precio}, 
        Caracteristicas principales: 
        motherboard: ${this.motherboard}, procesador: ${this.procesador},
        discoDuro: ${this.discoDuro}, ram: ${this.ram}, fuente: ${this.fuente}, 
        tarjetaDevideo: ${this.tarjetaDevideo}
        `
    }
mostrarInfo(){
    console.log(this.info)
    }
}


const pc1 =  new PikachuPC("Gamer", "Asus pro", "Ryzen 3 3200", "3Tb sdd", 64, "1200w", "GTX 1050", 50000)


pc1.mostrarInfo();
