// Arreglo de productos
const productos = [
    { nombre: "Laptop", descripcion: "Laptop de 14 pulgadas con 8GB de RAM" },
    { nombre: "Teléfono", descripcion: "Teléfono móvil con pantalla de 6.1 pulgadas" },
    { nombre: "Tablet", descripcion: "Tablet de 10 pulgadas con 64GB de almacenamiento" },
    { nombre: "Monitor", descripcion: "Monitor de 24 pulgadas con resolución Full HD" },
    { nombre: "Teclado", descripcion: "Teclado mecánico RGB con teclas retroiluminadas" },
    { nombre: "Mouse", descripcion: "Mouse inalámbrico ergonómico con 16000 DPI" },
    { nombre: "Impresora", descripcion: "Impresora láser a color con conectividad WiFi" },
    { nombre: "Auriculares", descripcion: "Auriculares Bluetooth con cancelación de ruido" },
    { nombre: "Cámara Web", descripcion: "Cámara web HD con micrófono integrado" },
    { nombre: "Disco Duro", descripcion: "Disco duro externo de 1TB con USB 3.0" },
    { nombre: "Altavoces", descripcion: "Altavoces estéreo con subwoofer y sonido envolvente" },
    { nombre: "Smartwatch", descripcion: "Reloj inteligente con monitor de frecuencia cardíaca" },
    { nombre: "Router", descripcion: "Router WiFi de doble banda con 4 antenas" },
    { nombre: "Tarjeta Gráfica", descripcion: "Tarjeta gráfica de 6GB con soporte para 4K" },
    { nombre: "Cargador Portátil", descripcion: "Cargador portátil de 10000mAh con puerto USB-C" }
];
// Función para ordenar los productos alfabéticamente por nombre
function ordenarProductosAlfabeticamente(productos) {
    return productos.sort((a, b) => a.nombre > b.nombre ? 1 : -1);
}

// Función para buscar un producto por su nombre
function buscarProductosPorNombre(productos, nombreBuscado) {
    return productos.filter(producto =>
        producto.nombre.toLowerCase().includes(nombreBuscado.toLowerCase())
    );
}

// Función para mostrar los productos en el HTML
function mostrarProductos(productos) {
    const productosContainer = document.getElementById("productosContainer");
    productosContainer.innerHTML = "";  // Limpiar el contenido actual

    productos.forEach(producto => {
        const divProducto = document.createElement("div");
        divProducto.classList.add("producto");
        divProducto.innerHTML = `<h3>${producto.nombre}</h3><p>${producto.descripcion}</p>`;
        productosContainer.appendChild(divProducto);
    });
}

// Mostrar todos los productos inicialmente
mostrarProductos(productos);

// Función para ordenar y actualizar la lista de productos en el HTML
function ordenarProductos() {
    const productosOrdenados = ordenarProductosAlfabeticamente(productos);
    mostrarProductos(productosOrdenados);
}

// Función para buscar productos al escribir en el input
document.getElementById("buscador").addEventListener("input", function () {
    const nombreBuscado = this.value;
    const productosFiltrados = buscarProductosPorNombre(productos, nombreBuscado);
    mostrarProductos(productosFiltrados);
});
