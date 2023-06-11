import React, { useEffect, useRef } from 'react'
import { CartModal } from "./CartModal/index.jsx"

import { StyledModal, StyledDivModal,  StyleUlModal, StyledTotalValueModal, StyledBackdrop } from "./style.js"
import { StyledButton } from '../../styles/button.js'
import { Title_3, Title_4 } from '../../styles/typography.js'
export function Modal({setIsModalOpen, productsCart, setProductsCart, totalPrice}){
    const modalRef = useRef(null)

    useEffect(() => {
        if (productsCart.length === 0) {
          setIsModalOpen(false)
        }
    }, [productsCart, setIsModalOpen])

    useEffect(() => {
        function handleKeyDown(event) {
          if (event.keyCode === 27) { // Verifica se a tecla pressionada é a tecla "Esc"
            setIsModalOpen(false)
          }
        }
    
        window.addEventListener('keydown', handleKeyDown)
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown)
        };
    }, [setIsModalOpen])


    useEffect(() => {
        function handleOutClick(event) {
          if (modalRef.current && !modalRef.current.contains(event.target)) {
            setIsModalOpen(false)
          }
        }
    
        window.addEventListener('mousedown', handleOutClick)
    
        return () => {
          window.removeEventListener('mousedown', handleOutClick)
        };
    }, [setIsModalOpen])

    function handleCloseModal(){
        setIsModalOpen(false)
    }


    function handleRemoveAll() {
        setProductsCart([])
        localStorage.clear()
        setIsModalOpen(false)
    }
      
    

    return(
      <StyledBackdrop>
        <StyledModal role="dialog"  ref={modalRef}>
            <StyledDivModal>
                <Title_4>Carrinho de Compras</Title_4>
                <StyledButton onClick={(handleCloseModal)}>X</StyledButton>
            </StyledDivModal>
            <StyleUlModal>
                <CartModal productsCart={productsCart} setProductsCart={setProductsCart} />
            </StyleUlModal>
            <StyledTotalValueModal>
                <Title_3>Total</Title_3>
                <Title_3>R$ {totalPrice.toFixed(2)}</Title_3>
            </StyledTotalValueModal>
            <StyledButton button="big" onClick={handleRemoveAll}>Remover Todos</StyledButton>
        </StyledModal>
      </StyledBackdrop>  
    )
}


