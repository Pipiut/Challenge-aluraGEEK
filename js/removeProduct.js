import { listAPI } from "./listAPI.js";

//validaciones

async function removeProduct(evento){
    evento.preventDefault();
   const id = evento.target.id
    try{
        await listAPI.removeProduct(id)    
        alert("Producto borrado exitosamente!")
    }catch(e){
        alert(e);
    }
}

export const remove={
    removeProduct
}
    