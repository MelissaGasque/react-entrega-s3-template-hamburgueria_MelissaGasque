import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Header } from "../Header"
import { Product } from "./Product"
import { Modal } from "../Modal"

import { StyledProducList } from "./style"

export function ProductsList({productsCart, setProductsCart, listLength, totalPrice}){
    const [ products, setProduts ] = useState([])
    const [ inputSearch, setInputSearch ] = useState("")
    const [ isModalOpen, setIsModalOpen ] = useState(false)

    const filterProducts = products.filter(product => product.name.toUpperCase().includes(inputSearch.toUpperCase()) || product.category.toUpperCase().includes(inputSearch.toUpperCase()))
  
    
    useEffect(() => {
        const getProducts = async () =>{
            try{
                const response = await api.get("/products")
                setProduts(response.data) 
            }catch(error){
                console.log("Erro ao mostrar a API")
            }
        }
        getProducts()
    }, [])
    

    return(
        <>
            <Header  
            setInputSearch={setInputSearch}
            setIsModalOpen={setIsModalOpen}
            listLength={listLength}
             />
            {
            isModalOpen ? 
            <Modal 
            setIsModalOpen={setIsModalOpen}
            productsCart={productsCart}
            setProductsCart={setProductsCart}
            totalPrice={totalPrice}
            /> : null
            }
            <StyledProducList>
                {
                filterProducts.map((product) => 
                <Product 
                setIsModalOpen={setIsModalOpen}
                productsCart={productsCart}
                setProductsCart={setProductsCart}
                key={product.id}
                {... product}/>)
                }
            </StyledProducList>
        </>
    )
}