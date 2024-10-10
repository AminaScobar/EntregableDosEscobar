const serviciosMecanicos = [
    {
        id: "am",
        imagen: "https://media.istockphoto.com/id/1325588832/es/foto/verter-aceite-de-motor-para-veh%C3%ADculos-de-motor-de-una-botella-gris-en-el-motor.jpg?s=1024x1024&w=is&k=20&c=baO1JuAKloP8wHwtc9KkVgy_-Ebw8ertgT_eclrqkCc=",
        servicio: "Cambio de Aceite de Motor",
        precio: 40,
    },
    {
        id: "at",
        imagen: "https://media.istockphoto.com/id/1364951743/es/foto/revisando-los-discos-de-freno-de-un-autom%C3%B3vil-moderno-sistema-de-frenado-del-veh%C3%ADculo.jpg?s=1024x1024&w=is&k=20&c=7WiwcXEPoYdVikY1TWEG_o0mkgmS3HUqLj0t-5vk7do=",
        servicio: "Cambio de Aceite de caja de transmición",
        precio: 100,
    },
    {
        id: "bj",
        imagen: "https://media.istockphoto.com/id/1253089690/es/foto/reemplazo-de-buj%C3%ADas-en-un-motor-moderno.jpg?s=1024x1024&w=is&k=20&c=79kaOJOvUxqBXlMlDKM9ILDtSNJ6CaW8l-7D9JfH8e8=",
        servicio: "Cambio de bujillas",
        precio: 60,
    },
    {
        id: "fr",
        imagen: "https://media.istockphoto.com/id/1364951743/es/foto/revisando-los-discos-de-freno-de-un-autom%C3%B3vil-moderno-sistema-de-frenado-del-veh%C3%ADculo.jpg?s=1024x1024&w=is&k=20&c=7WiwcXEPoYdVikY1TWEG_o0mkgmS3HUqLj0t-5vk7do=",
        servicio: "Cambio de frenos",
        precio: 120,
    }
]

const contenedorPrincipal = document.getElementById("contenedorPrincipal");
let totalesServicios = {};

serviciosMecanicos.forEach((servicio)=> {
   
    const servicioDiv = document.createElement('div');

    servicioDiv.classList.add("bg-box")

    servicioDiv.innerHTML = `
        <img src="${servicio.imagen}" alt="${servicio.servicio}" >
        <h5>${servicio.servicio}</h5>
        <p>Precio: $${servicio.precio}</p>
        <div class="input">
          <label for="tentacles">¿Cuantos autos?</label>
          <input type="number" id="valorInput${servicio.id}" name="cantidad" min="0" value="0"/>
        </div>
        <h4 class="total${servicio.id}"></h4>  
    `;

    contenedorPrincipal.appendChild(servicioDiv);

    obtenerTotalServicio = document.getElementById(`valorInput${servicio.id}`)
    
    obtenerTotalServicio.addEventListener('input', () => {
        const cantidad = document.getElementById(`valorInput${servicio.id}`).value;
        const total = servicio.precio * cantidad;
        const totalElemento = document.querySelector(`.total${servicio.id}`);
        totalElemento.textContent = `Total: $${total}`;

        totalesServicios[servicio.id] = total;
    });

});

// Evento para sumar todos los totales
document.getElementById('botonSumaTotales').addEventListener('click', () => {
    let sumaTotal = 0;
    
    // Sumar los valores almacenados en totalesServicios
    for (const total in totalesServicios) {
        sumaTotal += Number(totalesServicios[total]);
    }
    

    const showCotizacion = document.getElementById('showCotizacion');

    showCotizacion.classList.add('show')
    showCotizacion.innerHTML = `La suma total de todos los servicios es: <h3>$${sumaTotal}</h3>`;

});
