import lixeira from "../../../assets/lixo.png"

import { StyledLiModal, StyledLidiv,  StyledImg  } from "./style"
import { Title_1 } from "../../../styles/typography"

export function CartModal({productsCart, setProductsCart}){

  function DeleteProduc(event, product) {

    event.preventDefault()
    const updatedList = productsCart.filter((item) => item !== product)
    setProductsCart(updatedList)
    localStorage.setItem('productsCart', JSON.stringify(updatedList))
  }

    return(
        <>
        {productsCart.map((product, index) => (
          <StyledLiModal key={index}>
            <StyledLidiv>
                <img src={product.img} alt={product.name} />
                <Title_1>{product.name}</Title_1>
            </StyledLidiv>
            <StyledImg  src={lixeira} alt="Desenho de uma lixeira da cor cinza" onClick={(event) => DeleteProduc(event, product)} />
          </StyledLiModal>
        ))}
      </>
    )
  }
