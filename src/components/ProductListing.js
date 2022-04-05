import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProduct } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent'
function ProductListing() {
  const dispatch = useDispatch();
  const fetchData = async() => { 
    const response = await axios.get('https://fakestoreapi.com/products');
    dispatch(setProduct(response.data));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='ui grid container'>
      <ProductComponent />
    </div>
  )
}

export default ProductListing
