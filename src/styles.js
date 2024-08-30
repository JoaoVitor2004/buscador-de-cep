import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
`;

export const Title = styled.h1`
    font-size: 85px;
    font-weight: bold;
    margin-bottom: 30px;
    animation: flipTitle 2s;

    @keyframes flipTitle {
        from {
            transform: rotateX(90deg);
        }
        to {
            transform: rotateX(0);
        }
    }

    @media (width < 620px) {
        font-size: 40px;
    }
`;

export const ContainerInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
    background-color: rgba(255,255,255,0.2);
    border-radius: 8px;
    box-shadow: 1px 3px 8px rgba(0,0,0,0.5);
    padding: 10px;
    max-width: 100%;
`;

export const InputSearch = styled.input`
    outline: none;
    padding: 10px 20px;
    border-radius: 0;
    border: none;
    background: none;

    &::placeholder {
        color: white;
    }
`;

export const ButtonSearch = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    border-radius: 5px;
    background: none;
    transition: transform 0.5s;

    &:hover {
        transform: scale(1.2);
    }
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    max-width: 85%;
    background-color: white;
    border-radius: 8px;
    width: 500px;
    color: black;
    padding: 30px 0;
`;

export const Cep = styled.h2``;

export const Rua = styled.span``;

export const Complemento = styled.span``;

export const Bairro = styled.span``;

export const Estado = styled.span``;