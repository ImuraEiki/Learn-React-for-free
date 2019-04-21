import React from 'react'
import productsData from './vschoolProducts'
import Product from './Product'

function App(){
  const productComponents = productsData.map(item => <Product product={item}/>)

  return(
    <div>
      {productComponents}
    </div>
  )
}

export default App;
