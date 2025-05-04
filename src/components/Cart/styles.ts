// CSS in TS
import styled from "styled-components"

interface ContainerProps {
    showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
    position: fixed;
    right: ${(props) => props.showCart ? "0" : "-400px"};
    top: 0;
    height: 100dvh;
    width: 400px;
    background-color: #c6d6d6;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.4);
    padding: 2rem;

    transition: right 0.5s;
`

export const Title = styled.h1`
    display: flex;
    justify-content: center;
`