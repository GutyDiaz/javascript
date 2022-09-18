//Declaración de la clase
class productos{
    constructor(id, articulo, color, cantidad, precio,){
        this.id=id,
        this.articulo = articulo,
        this.color = color,
        this.cantidad= cantidad,
        this.precio = precio
    }
}

let stock = []
const cargarStock = async () =>{
    const response = await fetch("productos.json")
    const data = await response.json()
    for(let producto of data){
                let productoingresado = new productos(producto.id, producto.articulo,producto.color,producto.cantidad, producto.precio,)
                stock.push(productoingresado)
            }
}

cargarStock ()

