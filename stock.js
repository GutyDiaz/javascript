// class productos{
//     constructor(id, articulo, sku, color, cantidad, precio,){
//         this.id=id,
//         this.articulo = articulo,
//         this.sku= sku,
//         this.color = color,
//         this.cantidad= cantidad,
//         this.precio = precio
//     }
//     mostrarproductos(){
       
//         console.log(`El producto es ${this.articulo} ${this.sku} color ${this.color} cantidad ${this.cantidad} y vale ${this.precio}`)
//     }
// }

let DateTime = luxon.DateTime

const dt = DateTime.now()
console.log(dt.year)
console.log(dt.day)
let mostrarFecha = document.getElementById("fecha")
let fecha = (dt.toLocaleString(DateTime.DATE_MED))
mostrarFecha.innerHTML=`<p>${fecha}</p>`


let modalBody = document.getElementById("modal-body")
let parrafoCompra = document.getElementById('precioTotal')
// let deposito = []
// const producto1 = new producto(1,"Heladera inverter",2365, "negro", 33 , 75000)
// deposito.push(producto1)
// const producto2 = new producto (2, "Lavarropas automatico next", 8874 , "blanco",3, 40000)
// deposito.push(producto2)
// const producto3 = new producto (3, "Smart TV 32 pulgadas", 3000,  "gris",14, 42000)
// deposito.push(producto3)
// const producto4 = new producto (4, "Celular A23",36548, "negro", 2,72000)
// deposito.push(producto4)
// const producto5= new producto (5, "Parlante portatil", 257,  "naranja", 300,5500)
// deposito.push(producto5)
// console.log(deposito)

// const stock = [producto1,producto2,producto3,producto4,producto5]
// console.log(...stock)

// let productoBuscado = stock.find( producto => producto.articulo == "Parlante portatil") ?? "No tenemos ese producto en Stock"
// console.log(productoBuscado)

function guardarProducto(){
    let articuloInput = document.getElementById ("articuloInput") 
    let colorInput = document.getElementById ("colorInput") 
    let cantidadInput = document.getElementById ("cantidadInput")
    let precioInput = document.getElementById ("precioInput") 
    let productoingresado = new productos (stock.length+1,articuloInput.value,colorInput.value,cantidadInput.value,precioInput.value )
    console.log(productoingresado)
    stock.push(productoingresado)

}


const guardarProductoBtn = document.getElementById("guardarProductoBtn")
      guardarProductoBtn.addEventListener("click", guardarProducto)
    let inputs = document.querySelectorAll ('input')
        guardarProductoBtn.addEventListener('click', () =>{
        inputs.forEach(input => input.value = '')
    })

let productosEnstock = JSON.parse(localStorage.getItem("stock")) || []


let divProductos = document.getElementById("productos")
  divProductos.setAttribute("class", "productos") 
  
  let productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || []

function mostrarStock(){
    stock.forEach((producto)=>{
        let consultarproducto = document.createElement("div")
            consultarproducto.innerHTML =  `<article class="card">
                                                <h1 class="productoCard">${producto.articulo}</h1>
                                                <div class="content">
                                                    <p class="colorCard">${producto.color}</p>
                                                    <p class="precioCard">Precio:$ ${producto.precio}</p>
                                                    <button id="guardarProductoBtn${producto.id}" class="btn btn-outline-success">Agregar al carrito</button>
                                                </div>                                      
                                            </article>`
    divProductos.appendChild(consultarproducto)
            
    let btnAgregar = document.getElementById(`guardarProductoBtn${producto.id}`)
    btnAgregar.addEventListener("click", () =>{
        agregarAlCarrito(producto)
        
    })
    })
}

function agregarAlCarrito(producto){

    console.log(`El producto ${producto.articulo} de color ${producto.color} ha sido agregado. N° identificación producto: ${producto.id}`)
    
    let productoAgregado = productosEnCarrito.find((elem) => (elem.id == producto.id))
    console.log(productoAgregado)
    console.log(productosEnCarrito);
    if (productoAgregado == undefined){
        productosEnCarrito.push(producto)
        console.log(productosEnCarrito);
        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))        
        Swal.fire({
            
            title: "Se Agrego el producto",
            text: `${producto.articulo}`,
            timer: 2000,
            
        })
        if (producto.id === producto){
            producto.cantidad++
        }
    }
    else{
        console.log(`El producto ${producto.articulo} ya se encuentra en el carrito`)
        Swal.fire({
                    title: "Producto ya agregado",
                    text: `El producto ${producto.articulo} ya se encuentra en el carrito`,
                    icon: "info",
                    timer:4000,
                    confirmButtonText:"Aceptar",
                    confirmButtonColor: 'red',
                    })
    }    
}
function ocultarStock(){
    divProductos.innerHTML=""
}

const contadorCarrito = document.getElementById('contadorCarrito')
contadorCarrito.innerText = productosEnCarrito.length

let mostrarStockBtn = document.getElementById("mostrarStockBtn")
    mostrarStockBtn.addEventListener("click", mostrarStock)
let ocultarStockBtn = document.getElementById("ocultarStockBtn")
    ocultarStockBtn.onclick = ocultarStock

function ProductosCarrito(productosDelStorage) {
    modalBody.innerHTML = " "  
        productosDelStorage.forEach((productoCarrito) => {
            
            modalBody.innerHTML +=
            //  `
            // <p>${productoCarrito.articulo}</p>
            // <p>Precio:$${productoCarrito.precio}</p>
            // <p>Cantidad: <span id="cantidad">${productoCarrito.cantidad}</span></p>
            // <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
            // `
       
            
            `
                <div id ="productoCarrito${productoCarrito.id}" >
                    <div>
                        <h3 class="card-title">${productoCarrito.articulo}</h3>
                        <h4 class="card-title">$ ${productoCarrito.precio}</h4>
                            <p class="card-text">Cantidad: ${productoCarrito.cantidad}</p> 
                            <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
                    </div>    
                </div>`
        })   
    productosDelStorage.forEach((productoCarrito, indice)=>{
            document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener('click', () => {
                Toastify({
                    text: `${productoCarrito.articulo} ha sido eliminado`,
                    duration: 2500,
                    gravity: "bottom",
                    position: "left",
                    style:{
                        background: "linear-gradient(to right, #e31212, #efe42a)",
                        color: "white", 
                    }
                    
                    }).showToast();
                console.log(`Producto ${productoCarrito.articulo} eliminado`)
                let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
                console.log(cardProducto);
                cardProducto.remove()
    
                productosEnCarrito.splice(indice, 1)
                console.log(productosEnCarrito)
                localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
                ProductosCarrito(productosEnCarrito)
            })  
    
    })
    compraTotal(...productosDelStorage)
    }
    let acumulador
    function compraTotal(...productosTotal) {
        acumulador = 0;
    
        acumulador = productosTotal.reduce((acumulador, productoCarrito)=>{
            return acumulador + productoCarrito.precio
        },0)
        
        console.log(acumulador)
        
       acumulador > 0 ? parrafoCompra.innerHTML = `El importe de su compra es: $ ${acumulador}`: parrafoCompra.innerHTML = `<p>No hay productos en el carrito</p>`       
    }

    function finalizarCompra(){
        Swal.fire({
            title: '¿Está seguro de realizar la compra?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Sí',
            cancelButtonText: 'NO',
            confirmButtonColor: 'green',
            cancelButtonColor: 'red',
        }).then((result) => {
            let DateTime = luxon.DateTime
            const dt = DateTime.now()
            
            let fecha = `Siendo las ${dt.toLocaleString(DateTime.TIME_SIMPLE)} del ${dt.toLocaleString(DateTime.DATE_FULL)}`
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Compra realizada',
                icon: 'success',
                confirmButtonColor: 'green',
                text: `Muchas gracias por su compra. `,
                footer: `<p>${fecha} nos contactaremos dentro de 48hs con usted. Gracias!</p>`
            })
            productosEnCarrito = []
            localStorage.removeItem('carrito')
            console.log(`El total de su compra es ${acumulador}`)
            ProductosCarrito(productosEnCarrito)
            }
            else{
                Swal.fire({
                    title: 'Compra NO realizada',
                    icon: 'info',
                    text: `La compra no ha sido realizada! Atención: Sus productos seguiran en el Carrito`,
                    confirmButtonColor: 'green',
                    timer:3500
                })
            }
        })}
    let botonCarrito = document.getElementById("botonCarrito")
    botonCarrito.addEventListener('click', () => {
        ProductosCarrito(productosEnCarrito)
    })
    let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
    botonFinalizarCompra.addEventListener('click',()=>{
        finalizarCompra()
    })
    function quantityChanged(event){
        const input = event.target;
        input.value <=0 ? (input.value=1) : null;
    }
    // btnBuscar.addEventListener('click', ()=>{
    //     event.preventDefault()
    //     console.log("click");
    //     console.log(inputBuscar.value.toLowerCase());
    //     let articuloBuscado = stock.filter(producto =>(producto.articulo.toLowerCase() == inputBuscar.value.toLowerCase()))
    //     console.log(articuloBuscado);
    //     if(articuloBuscado.length == 0){
    //         console.log(`No hay coincidencia`);
    //         mostrarStock(stock)
    //     }else{
    //         mostrarStock(articuloBuscado)
    
    //     }
    // })
    // let divLoader = document.getElementById("loader")
    let divLoader = document.getElementById("loader")
    const loading = setTimeout(()=>{
        divLoader.remove()
        mostrarStock(deposito)
    },2000)
    
