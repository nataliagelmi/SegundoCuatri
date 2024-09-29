// Clase Libro
class Libro {
    constructor(
        public id: number,
        public titulo: string,
        public autor: string,
        public anio: number
    ) {}
}

// Clase GestorLibro
class GestorLibro {
    private libros: Libro[] = [];

    // Insertar un nuevo libro
    public insertar(libro: Libro): void {
        this.libros.push(libro);
        console.log(`Libro '${libro.titulo}' añadido.`);
    }

    // Borrar un libro por ID
    public borrar(id: number): void {
        const indice = this.libros.findIndex(libro => libro.id === id);
        if (indice !== -1) {
            const libroBorrado = this.libros.splice(indice, 1);
            console.log(`Libro '${libroBorrado[0].titulo}' borrado.`);
        } else {
            console.log(`Libro con ID ${id} no encontrado.`);
        }
    }

    // Modificar un libro por ID
    public modificar(id: number, nuevoLibro: Libro): void {
        const indice = this.libros.findIndex(libro => libro.id === id);
        if (indice !== -1) {
            this.libros[indice] = nuevoLibro;
            console.log(`Libro con ID ${id} modificado.`);
        } else {
            console.log(`Libro con ID ${id} no encontrado.`);
        }
    }

    // Listar todos los libros
    public listar(): void {
        if (this.libros.length === 0) {
            console.log("No hay libros en la colección.");
            return;
        }

        console.log("Lista de libros:");
        this.libros.forEach(libro => {
            console.log(`ID: ${libro.id}, Título: '${libro.titulo}', Autor: '${libro.autor}', Año: ${libro.anio}`);
        });
    }
}

// Ejemplo de uso
const gestor = new GestorLibro();

// Insertar libros
gestor.insertar(new Libro(1, "Cien años de soledad", "Gabriel García Márquez", 1967));
gestor.insertar(new Libro(2, "El Quijote", "Miguel de Cervantes", 1605));
gestor.insertar(new Libro(3, "1984", "George Orwell", 1949));

// Listar libros
gestor.listar();

// Modificar un libro
gestor.modificar(2, new Libro(2, "Don Quijote de la Mancha", "Miguel de Cervantes", 1605));

// Borrar un libro
gestor.borrar(1);

// Listar libros nuevamente
gestor.listar();
