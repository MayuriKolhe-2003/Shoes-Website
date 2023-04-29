import React from 'react'
import ProductImage from './singleProcuctPageComponents/ProductImage'
import ProductDesc from './singleProcuctPageComponents/ProductDesc'
import Banner from './Banner'
import { useParams } from 'react-router-dom'
import products from '../data/products.json'

const SingleProduct = () => {
  let {id} = useParams();
	console.log(id);
	const shoe =  products.find(ob => ob.id == id);
	console.log(shoe);

  return (
    <>
    <Banner />
	  <ProductImage shoe={shoe} />
	  <ProductDesc shoe={shoe} />
  
    </>
  )
}

export default SingleProduct
