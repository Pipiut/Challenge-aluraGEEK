import { listAPI } from "./listAPI.js";
import {remove} from "./removeProduct.js"

const list = document.querySelectorAll("[data-list]");

//validaciones

export default function construyeCard(nombre, precio, imagen, id) {
    const producto = document.createElement("li");
    producto.className = "card";

    producto.innerHTML = `
    <img src="${imagen}"/>
    <div class="card-container--info">
      <p>${nombre}</p>
      <div class="card-container--value">
            <p>${precio}.00</p>
            <button data-id class="buttontrash" id="${id}"></button>
      </div>
    </div>`
    return producto;
}


async function listProduct() {
    try{
        const listaAPI = await listAPI.listProduct();
        await listaAPI.forEach(element => list.forEach(componente => componente
            .appendChild(construyeCard(element.nombre, element.precio, element.imagen, element.id))));
    
    }catch{
        list.innerHTML=`<h2 class="message__title">No fue posible cargar la lista de productos</h2>`;
    }
    const trashBtns = document.querySelectorAll("[data-id]")
    trashBtns.forEach(btn => btn.addEventListener("click",evento=>remove.removeProduct(evento)));
}

listProduct();

 

