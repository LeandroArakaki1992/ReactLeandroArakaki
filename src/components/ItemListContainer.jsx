import React from 'react';
import ItemListMostrar from './ItemListMostrar';

export default function ItemListContainer() {

    let productos = ["Sarten aqua", "Rectangular", "Aqua Flip", "Cacerola"];
  return <ItemListMostrar productos={productos} />;
}

