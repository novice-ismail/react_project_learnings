import React from 'react'
import Product from './Product'

function Products_list() {
  return (
    <div className='products'>
    <Product name="Samsung M51" price="34000" url="https://www.jiomart.com/images/product/original/rvtztwn4nr/multronics-transparent-silicon-back-cover-compatible-with-samsung-galaxy-m51-product-images-orvtztwn4nr-p601786486-0-202305251614.jpg?im=Resize=(200,250)" />
    <Product  name="Levis Jeans" price="2000" url="https://lscoecomm.scene7.com/is/image/lscoecomm/BlogTop_10_Best_Jeans_for_Men_Mobile?fmt=jpeg&qlt=70&resMode=bisharp&fit=crop,0&op_usm=0.6,0.6,8&wid=200&hei=250"/>
    <Product  name="Dell Monitor " price="10000" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbLRyVl2_IAYL-PqDK8_ZY1Lorntq-bZ82o3fYWWH-TyYXjOkbPWQgYlSUvl4OE64a9qE&usqp=CAU"/>
    </div>
  )
}

export default Products_list
