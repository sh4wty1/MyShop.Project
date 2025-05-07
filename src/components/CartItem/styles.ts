// CSS in TS
import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem auto;
`

export const Counter = styled.span``

export const Price = styled.strong``

export const ProductName = styled.h3``

export const RemoveBtn = styled.button`
    border-radius: 10px;
    border: none;
    width: 2rem;
    height: 2rem;
    background-color: #cfccbb;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        color: #a92727;
        transition: 0.2s;
    }
`