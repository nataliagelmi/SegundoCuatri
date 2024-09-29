// URL de la API pública
const api = 'https://jsonplaceholder.typicode.com/users'; 

// Función para obtener datos de la API y mostrar en tarjetas
async function fetchUsuarios() {
    try {
        // Realizar la solicitud a la API
        let promesa = await fetch(api);
        
        if (!promesa.ok) {
            throw new Error('Error por favor verifique la conexión a la red');
        }

        const users = await promesa.json(); // Convertir la respuesta a JSON

        // Seleccionar el contenedor de tarjetas
        const cardsContainer = document.getElementById('cards-container');

        // Limpiar el contenedor (en caso de que ya haya contenido)
        cardsContainer.innerHTML = '';

        // Crear una tarjeta para cada usuario
        users.forEach(user => {
            // Crear elementos para la tarjeta
            const card = document.createElement('div');
            card.className = 'card';

            const titulo = document.createElement('div');
            titulo.className = 'card-titulo';
            titulo.textContent = `${user.name} (${user.username})`; // Título con nombre y nombre de usuario

            const descripcion = document.createElement('div');
            descripcion.className = 'card-descripcion'; // Corregido de 'card-descricion' a 'card-descripcion'
            descripcion.textContent = `Email: ${user.email} | Ciudad: ${user.address.city}`;

            // Añadir elementos a la tarjeta
            card.appendChild(titulo);
            card.appendChild(descripcion);

            // Añadir la tarjeta al contenedor
            cardsContainer.appendChild(card);
        });
    } catch (error) {
        alert('No se pudo traer los datos:', error); 
    }
}

// Llamar a la función cuando la página cargue
window.onload = fetchUsuarios;
