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
    background-color: #cfccbb;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.4);
    padding: 2rem;

    transition: right 0.5s;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

export const Title = styled.h1`
    display: flex;
    justify-content: center;
`

export const ExitBtn = styled.button`
    transform: translateY(20%);
    border: none;
    border-radius: 5px;
    background-color: #cfccbb;
    font-size: 1.5rem;
    cursor: pointer;
`