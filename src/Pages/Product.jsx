import React, { useContext } from 'react'
import { ShopContex } from '../Contex/ShopContex'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  const{all_product}=useContext(ShopContex);
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product
