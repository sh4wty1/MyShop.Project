// CSS in TS
import styled from "styled-components"

export const StyledHeader = styled.header`
    background-color: #5d544d;
    padding: 0 12rem;
    height: 6rem;
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.7);
`

export const Wrapped = styled.div`
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transform: translateY(10%);
`

export const HeaderTitle = styled.h1`
    font-family: "Lobster", sans-serif;
    font-weight: bold;
    font-size: 3rem;
    color: #cfccbb;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 4rem;
`

export const AuthButton = styled.button<{ $auth: boolean }>`
    display: flex;
    gap: 8px;
    align-items: flex-end;
    font-weight: bold;
    font-size: 1rem;
    color: #dee7e7;
    background-color: ${({ $auth }) => ($auth? "#a92727" : "#27a962")};
    padding: 10px 2rem;
    border: ${({ $auth }) => ($auth? "#a92727" : "#27a962")} solid;
    border-radius: 1rem;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        background-color: #dee7e7;
        color: ${({ $auth }) => ($auth? "#a92727" : "#27a962")};
        transition: 0.3s;
    }
`

export const CartButton = styled.button`
    display: flex;
    gap: 8px;
    align-items: flex-end;
    font-weight: bold;
    font-size: 1rem;
    color: #dee7e7;
    background-color: #cb6f84;
    padding: 10px 2rem;
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