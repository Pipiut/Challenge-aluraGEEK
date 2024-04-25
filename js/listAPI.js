/*  Encargado de centralizar las requisiciones que se harán a tu servidor fake. */
//Requisición DELETE

/*La funcionalidad de eliminación (Delete) está implementada en los card de producto. 
Cada card tiene un icono de eliminar que, al hacer clic, realiza una solicitud DELETE para eliminar el producto correspondiente.

Para obtener el ID de un elemento que está siendo creado dinámicamente con JavaScript, primero
necesitas asegurarte de tener una referencia al elemento. 
Puedes obtener esta referencia al crear el elemento o al agregarlo al DOM. 
Luego, una vez que tienes la referencia al elemento, puedes acceder a su propiedad id para obtener su ID.*/

async function listProduct(){
    const conexion = await fetch("http://localhost:3001/productos",{
        method:"GET",
        headers:{
        "Content-type":"application/json"
        }
    });
    
    const conexionConvertida=await conexion.json();
    return conexionConvertida;
}

async function createProduct(nombre,precio,imagen, id){
    const conexion= await fetch("http://localhost:3001/productos",{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({
        nombre:nombre,
        precio:`$ ${precio}`,
        imagen:imagen,
        id:id
    })
    })
    if(!conexion.ok){
        throw new Error("No fue posible enviar el producto");
    }
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function removeProduct(id) {
    const conexion = await fetch(`http://localhost:3001/productos/${id}`,{
        method: 'DELETE',
        headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        url: 'http://localhost:3001/productos/' + id
    });
}

export const listAPI={
    listProduct,createProduct, removeProduct
}
