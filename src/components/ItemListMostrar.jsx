import React from 'react'

export default function ItemListMostrar({ productos }) {
  return (
    <>
    <h1 className='titulo'>LISTADO DE PRODUCTOS</h1>
    {productos.map((item) => (
        <p className='IL'>
            {item}
        </p>
    ))}
    </>
  );
}

