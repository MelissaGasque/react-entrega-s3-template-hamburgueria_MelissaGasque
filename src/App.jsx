import { useState } from "react"
import { ProductsList } from "./components/ProductsList/index"

import { GlobalReset } from "./styles/reset"
import { GlobalStyle } from "./styles/globalStyles"
import { StyledContainer } from "./styles/container"

function App() {
  const [productsCart, setProductsCart] = useState([])
  const listLength = productsCart.length

  const totalPrice = productsCart.reduce((accumulator, product) => {
    return accumulator + product.price
  }, 0);
  

  return (
    <>
      <GlobalReset/>
      <GlobalStyle/>
      <main>
      <StyledContainer>
        <ProductsList productsCart={productsCart} setProductsCart={setProductsCart} listLength={listLength} totalPrice={totalPrice} />
      </StyledContainer>  
      </main>
      
    </>
  )
}

export default App
