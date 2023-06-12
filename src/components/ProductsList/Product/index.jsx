import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { StyledProducList, StyledDivProducList, StyledDiv2ProducList } from './style'
import { StyledButton } from '../../../styles/button'
import { Title_1, Title_2, Text } from '../../../styles/typography'

export function Product({ name, category, price, img, id, setIsModalOpen, setProductsCart, productsCart }) {
  function handleOpenModal(){
    const newProduct = { id, img, name, price }
    const existinProduct = productsCart.find(product => product.id === id)

    if(existinProduct){
      toast.error("Esse produto já foi adicionado ao carrinho!");
      setIsModalOpen(false)
    }else{
      setIsModalOpen(true)
      const updatedCart = [...productsCart, newProduct]
      setProductsCart(updatedCart)
      localStorage.setItem('productsCart', JSON.stringify(updatedCart))
    }
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







