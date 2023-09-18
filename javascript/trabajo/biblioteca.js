class libros {
    constructor(
        titulo,
        autor,
        genero,
        numeroPaginas,

    ){
        this.titulo = titulo 
        this.autor = autor
        this.genero = genero
        this.numeroPaginas = numeroPaginas

       
        

        this.prestado = false 
        
    }
    prestar(){
        if(this.pestado){
            console.log("ya esta prestado el libro, no te lo dare")
        }else{
            this.prestado = true
            console.log("el libro se presto correctamente")
        }
    }

    devolver(){
        if(this.prestado){
            this.prestado = false
            console.log("el libro se ha devuelto")
        }else{
            console.log("el libro no esta prestado, no se puede devolver aun")
        }
    }

    editar(  NuevoTitulo, NuevoAutor, NuevoGenero, NuevoNumeroPaginas,){
        
        this.NuevoTitulo = NuevoTitulo
        this.NuevoAutor = NuevoAutor
        this.NuevoGenero = NuevoGenero
        this.NuevoNumeroPaginas = NuevoNumeroPaginas

        this.Newinfo = `
        Nombre: ${NuevoTitulo}, Autor: ${NuevoAutor}, Genero: ${NuevoGenero}, Numero de paginas: ${NuevoNumeroPaginas}`
        console.log("libro editado correctamente")


    }
    mostrarNuevaInfo(){
        console.log(this.Newinfo)
    }
}


class Biblioteca{
    constructor(){
        this.libros = [];
    }
    agregarLibro(libro){
        this.libros.push(libro)
        console.log(`el libro ${libro.titulo} se a agregado correctamente`)
    }
    eliminarLibro(libro){
        const index = indexOf(libro)

        if(index !== -1){
            this.libros.splice(index,1)
            console.log("el libro se ha elimidado correctamente")
        }else{
            console.log("el libro no se a encontrado")
        }
    }

    mostrarCatalogo(){
        console.log("catalogo de libros")
        this.libros.forEach((libro, index) => {console.log(`${index+1}
        Nombre: ${libro.titulo}, Autor: ${libro.autor}, Genero: ${libro.genero}, Numero de paginas: ${libro.numeroPaginas}
        `)
    })

    }

    buscarLibro(criterio){
        const resultado = this.libros.filter((libro) => {
            return(
                libro.titulo.toLowerCase().includes(criterio.toLowerCase()) ||
                libro.autor.toLowerCase().includes(criterio.toLowerCase()) ||
                libro.genero.toLowerCase().includes(criterio.toLowerCase())
            )
        })

        if(resultado.length > 0){
            console.log("resultado de busqueda")
            resultado.forEach((libro, index) => {
                console.log(`${index + 1}
        Nombre: ${libro.titulo}, Autor: ${libro.autor}, Genero: ${libro.genero}, Numero de paginas: ${libro.numeroPaginas}
        `)
            })
        }else{
            console.log(`no existe lo que buscas en ${criterio}`)
        }
    }

   
   
    
}



const biblioteca = new Biblioteca()
const libro1 = new libros("El señor de los anillos", "J.D.R Tolkien", "Fantasia", 1000)
const libro2 = new libros("un libro", "nadie", "drama", 500)


biblioteca.agregarLibro(libro1)
biblioteca.mostrarCatalogo(libro1)
libro1.editar("el nuevo", "RICARDO", "romance", 900)
libro1.mostrarNuevaInfo()
