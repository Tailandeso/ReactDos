import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import productos from './asyncMock';

const ItemDetailContainer = () => {

    const { id } = useParams ()


    const mostrarProductos = new Promise((resolve, reject) => {
    if(productos.length > 0){
    setTimeout(()=>{
    resolve(productos)
    },3000)
    }else{
    reject("No se obtuvieron los productos")
    }
    })
    mostrarProductos
    .then((resultado)=>{
    console.log(resultado)
    })
    .catch((error) => {
    console.log(error)
    })

    const productoFiltrado = productos.find ((producto) => producto.id == id)

    return (
        <div>
            <ItemDetail 
                producto = {productoFiltrado}
            />
        </div>
        )
}

export default ItemDetailContainer;