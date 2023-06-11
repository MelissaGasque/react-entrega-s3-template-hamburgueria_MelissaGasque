import React, { useEffect } from 'react'

import { StyledProducList, StyledDivProducList, StyledDiv2ProducList } from './style'
import { StyledButton } from '../../../styles/button'
import { Title_1, Title_2, Text } from '../../../styles/typography'

export function Product({ name, category, price, img, setIsModalOpen, setProductsCart, productsCart }) {
  function handleOpenModal() {
    setIsModalOpen(true)
    const newProduct = { img, name, price }
    const updatedCart = [...productsCart, newProduct]
    setProductsCart(updatedCart)
    localStorage.setItem('productsCart', JSON.stringify(updatedCart))
  }

  useEffect(() => {
    const savedCart = localStorage.getItem('productsCart')
    if (savedCart) {
      setProductsCart(JSON.parse(savedCart))
    }
  }, [])

  return (
    <StyledProducList>
      <StyledDivProducList>
        <img src={img}/>
      </StyledDivProducList>
      <StyledDiv2ProducList>
        <Title_1>{name}</Title_1>
        <Text>{category}</Text>
        <Title_2>R$ {price.toFixed(2)}</Title_2>
        <StyledButton button="mediun" onClick={handleOpenModal}>Adicionar</StyledButton>
      </StyledDiv2ProducList>
    
    </StyledProducList>
  );
}







