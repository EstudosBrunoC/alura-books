import Input from "../Input";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getLivros } from "../../servicos/livros";

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`;
const Title = styled.h1`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`;
const Subtitle = styled.h2`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`;
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`;

function Search () {
    const [livrosPesquisados, setlivrosPesquisados] = useState([]);
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        const livrosDaAPI = getLivros()
        setLivros(livrosDaAPI)
    }, [])

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
            <Input 
                placeholder="Escreva sua próxima leitura" 
                onBlur={(evento) => {
                    const textoDigitado = evento.target.value;
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado));
                    setlivrosPesquisados(resultadoPesquisa);
                }}
            />
            {livrosPesquisados.map( livro => (
                <Resultado>
                    <p>{livro.nome}</p>
                    <img src={livro.src} alt="Imagem do livro" />
                </Resultado>  
            )) }
        </SearchContainer>
    )
}

export default Search;