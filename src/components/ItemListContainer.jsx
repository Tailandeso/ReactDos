import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import productos from './asyncMock';

const ItemListContainer = ({greeting}) => {

const { categoriaId } = useParams()

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

const productosFiltrados = productos.filter((producto)=> producto.categoria == categoriaId)
console.log(productosFiltrados)
return (
  <div>
    {
      categoriaId ? <ItemList productos={productosFiltrados} />  : <ItemList productos={productos} />
    }
  </div>
)
}

export default ItemListContainer;

