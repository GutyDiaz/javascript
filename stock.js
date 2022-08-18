class producto{
    constructor(id, articulo, sku, color, cantidad, precio,){
        this.id=id,
        this.articulo = articulo,
        this.sku= sku,
        this.color = color,
        this.cantidad= cantidad,
        this.precio = precio
  
    
    }
    mostrarproductos(){
       
        console.log(`El producto es ${this.articulo} ${this.sku} color ${this.color} cantidad ${this.cantidad} y vale ${this.precio}`)
    }
}

let deposito = []
const producto1 = new producto(1,"Heladera inverter",2365, "negro", 33 , 75000)
deposito.push(producto1)
const producto2 = new producto (2, "Lavarropas automatico next", 8874 , "blanco",3, 40000)
deposito.push(producto2)
const producto3 = new producto (3, "Smart TV 32 pulgadas", 3000,  "gris",14, 42000)
deposito.push(producto3)
const producto4 = new producto (4, "Celular A23",36548, "negro", 2,72000)
deposito.push(producto4)
const producto5= new producto (5, "Parlante portatil", 257,  "naranja", 300,5500)
deposito.push(producto5)
console.log(deposito)

const stock = [producto1,producto2,producto3,producto4,producto5]
console.log(stock)


function guardarProducto(){
    let articuloInput = document.getElementById ("articuloInput") 
    let skuInput= document.getElementById ("skuInput") 
    let colorInput = document.getElementById ("colorInput") 
    let cantidadInput= document.getElementById ("cantidadInput") 
    let precioInput = document.getElementById ("precioInput") 
    let productoingresado = new producto(stock.length+1, articuloInput.value, skuInput.value, colorInput.value, cantidadInput.value, precioInput.value )
    console.log(productoingresado)
    stock.push(productoingresado)

}
const guardarProductoBtn = document.getElementById("guardarProductoBtn")
      guardarProductoBtn.addEventListener("click", guardarProducto)
    let inputs = document.querySelectorAll ('input')
        guardarProductoBtn.addEventListener('click', () =>{
        inputs.forEach(input => input.value = '')
    })


function modificarProducto() {
    const id = parseInt(prompt("Ingrese el id del producto que desea eliminar"));
    const producto = stock.find((prod) => prod.id == id);
    if (!producto) return alert("No se encontro el producto");
  
    const detallesProducto = `Articulo: ${producto.articulo}, Color: ${producto.color}`;
    alert(detallesProducto);
   
    const nuevoSku = document.getElementById ("skuInput") (("Ingrese el sku nuevo para el articulo"));
    producto.sku = nuevoSku;
    
    const nuevoColor = prompt("Ingrese el color nuevo para el articulo");
    producto.color = nuevoColor;
    
    const nuevaCantidad = prompt("Ingrese la cantidad nueva para el articulo");
    producto.cantidad = nuevaCantidad;
    
    const nuevoPrecio = prompt("Ingrese el precio nuevo para el articulo");
    producto.precio = nuevoPrecio;
    
    alert(
      `Producto Modificado: ${producto.articulo} Sku ${producto.sku} de color ${producto.color} y vale $ ${producto.precio}`
    );
  }

let modificarBtn = document.getElementById("modificarBtn")
  modificarBtn.addEventListener("click", modificarProducto)

let divProductos = document.getElementById("productos")
  divProductos.setAttribute("class", "productos") 
    

function mostrarStock(){
    stock.forEach((producto)=>{
        let consultarproducto = document.createElement("div")
            consultarproducto.innerHTML =  `<article class="card">
                                                <h1 class="productoCard">${producto.articulo}</h1>
                                                <h3 class="skuCard">SKU:${producto.sku}</h3>
                                                <div class="content">
                                                    <p class="colorCard">${producto.color}</p>
                                                    <p class="cantidadCard">Cantidad:${producto.cantidad}</p>
                                                    <p class="precioCard">Precio:$ ${producto.precio}</p>
                                                </div>                                      
                                            </article>`
    divProductos.appendChild(consultarproducto)
})
}
function ocultarStock(){
    divProductos.innerHTML=""
}

let mostrarStockBtn = document.getElementById("mostrarStockBtn")
    mostrarStockBtn.addEventListener("click", mostrarStock)
let ocultarStockBtn = document.getElementById("ocultarStockBtn")
    ocultarStockBtn.onclick = ocultarStock


let productoJSON = JSON.stringify(producto)
    console.log(productoJSON )
    localStorage.setItem("producto",productoJSON )

let productosJSON = JSON.stringify(stock)
    localStorage.setItem("productosJSON",productosJSON)

//FIN//






// function altaproducto(){
//     let productoingresado= prompt("ingrese el producto")
//     let skuingresado= prompt("ingrese el sku del producto")
//     let coloringresado= prompt("ingrese el color del producto")
//     let cantidadingresada= prompt("ingrese cantidad del producto")
//     let precioingresado= prompt("ingrese el precio del producto")
//     let Cargaproducto = new producto(stock.length+1, productoingresado,skuingresado,coloringresado,cantidadingresada,precioingresado)
//     console.log(Cargaproducto)
//     stock.push(Cargaproducto)

 
//     alert(`Producto ingresado: ${productoingresado} Sku ${skuingresado} de color ${coloringresado} cantidad ${cantidadingresada} y vale $ ${precioingresado}`)
    
// }





// let pregunta = (prompt(`Bienvenido/a Ingrese la opción que desea realizar:
// 1 - Alta
// 2 - Modificar
// 3 - Salir`))

//     while(pregunta !="salir"){

//     switch(pregunta){
        
//         case "alta":{
            
//             altaproducto()
//             break
//         }
//         case "modificar": {
//             modificarProducto();
//             break;
//         }
//         default: {
//         alert("")
//         }
        
//     }
    
//     pregunta = (prompt(`Bienvenido/a Ingrese la opción que desea realizar:
//     1 - Alta
//     2 - Modificar
//     3 - Salir`))
//     }
