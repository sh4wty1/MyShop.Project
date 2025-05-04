// CSS in TS
import styled from "styled-components"

export const Card = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    background-color: #fff;
    border: #282832 solid 3px;
    border-radius: 1rem;
    padding: 1rem;
`

export const ProductImage = styled.img`
    margin: 0 auto;
    width: 250px;
    height: 400px;
    object-fit: contain;
`

export const ProductName = styled.h2`
    text-align: center;
    margin: 1rem auto;
    font-size: 1rem;
    min-height: 4rem;
`

export const ProductInfos = styled.div`
    margin: 0.5rem auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Price = styled.strong``

export const Review = styled.span`
    font-size: 0.8rem;
`

export const AddToCartBtn = styled.button`
    margin-top: 0.5rem;
    width: 90%;
    height: 2rem;
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #dee7e7;
    background-color: #cb6f84;
    border: #cb6f84 solid;
    border-radius: 1rem;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        background-color: #dee7e7;
        color: #cb6f84;
        transition: 0.3s;
    }
`