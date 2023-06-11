import logo  from "../../assets/logoBurguer.png"
import carrinhoCompra from "../../assets/carrinhoCompra.png"
import pesquisa from "../../assets/buttonPesquisar.png"

import { StyledHeader, StyledDivHeader, StyledFormHeader } from "./style"

export function Header({setInputSearch, setIsModalOpen, listLength}){
    function handleOpenModal(){
        setIsModalOpen((isModalOpen) => !isModalOpen);
    }
    
    function Submit(event){
        event.preventDefault()
    }

    return(
        <StyledHeader>
            <StyledDivHeader>
                <img src={logo} alt="A Logo é a frase Burguer Kenzie. Burguer está em cor preta e Kenzie em cor laranja"/>
                <span onClick={handleOpenModal}>
                    <img src={carrinhoCompra} alt="É um carrinho de compra cor cinza e um quadrado verde no topo com o número de produtos no carrinho" />
                    <p>{listLength}</p>
                </span>
            </StyledDivHeader>
            <StyledFormHeader onSubmit={Submit}>
                <div>
                    <input type="text" placeholder="Digitar Pesquisa" onChange={(event) => setInputSearch(event.target.value)}/>
                    <img src={pesquisa} alt=" Um botão com fundo verde e desenho de lupa da cor branca"/>
                </div>
            </StyledFormHeader>    
        </StyledHeader>
    )
}