import { useState } from "react"
import { ProductsList } from "./components/ProductsList/index"

import { GlobalReset } from "./styles/reset"
import { GlobalStyle } from "./styles/globalStyles"


function App() {
  const [productsCart, setProductsCart] = useState([])
  console.log(productsCart)
  const listLength = productsCart.length

  const totalPrice = productsCart.reduce((accumulator, product) => {
    return accumulator + product.price
  }, 0);
  

  return (
    <>
      <GlobalReset/>
      <GlobalStyle/>
      <main>
        <ProductsList productsCart={productsCart} setProductsCart={setProductsCart} listLength={listLength} totalPrice={totalPrice} />
      </main>
      
    </>
  )
}

export default App
