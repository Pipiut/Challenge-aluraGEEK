import { listAPI } from "./listAPI.js";

const form = document.querySelector("[data-form]");

//validaciones

async function createProduct(evento){
    evento.preventDefault();
    const imagen= document.querySelector("[data-imagen]").value;
    const precio = document.querySelector("[data-precio]").value;
    const nombre=document.querySelector("[data-nombre]").value;

    try{
        await listAPI.createProduct(nombre,precio,imagen)
        alert("Producto enviado exitosamente!")
        
    }catch(e){
        alert(e);
    }
}

form.addEventListener("submit",evento=>createProduct(evento));