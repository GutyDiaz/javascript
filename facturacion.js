

alert(' Bienvenido! ingrese el detalle de la compra. ')

let Nombredelcliente = prompt (" Ingrese Apellido y Nombre")
if (Nombredelcliente =="") {
    alert("debe ingresar Apellido y Nombre")
    console.log("debe ingresar Apellido y Nombre")
}
else if (Nombredelcliente !="") {
    let telefono = prompt (" Ingrese su telefono")
    if (telefono =="") {
        alert("debe ingresar telefono")
        console.log("debe ingresar telefono")
    }    
    else if (telefono !="") {
        let email = prompt (" Ingrese domicilio del cliente")
        if (email =="") {
            alert("debe ingresar domicilio del cliente")
            console.log("debe ingresar domicilio del cliente")
        }
        else if (email !="") {
        
        // FUNCION

        let producto = 0;
        let precio = 0;
        let desc = 15;
        let ticket= 45456

        function Cantidadproductos(){
            let Cproducto = parseInt(prompt("Ingrese la cantidad de productos"))
            return Cproducto
        }
        function descuento(total,desc){
            let resultado = total - (total*desc/100)
            return resultado
        }
        function Datos(precio, desc){
        console.log("El costo es de " + precio);
        alert("El costo es de $ " + precio)

        console.log("Si abona en efectivo su total es de $ " + desc)
        alert("Si abona en efectivo su total es de  $ " + desc);
        }
        let Cproducto = Cantidadproductos()
        for (let i=0; i<Cproducto; i++){
        producto = parseInt(prompt(`Ingrese precio del producto ${i+1}`))
        precio = precio + producto
        console.log("costo al momento " + precio)}
        desc = descuento(precio,desc)
        Datos(precio, desc)

        let remito = (ticket + 1)
        alert(`Gracias! por la compra, se genero la factura N° ${remito}`)

        const productos = [heladera, televisor, parlante, celular]
console.log (productos)


        }
    }
}
    

// FIN //