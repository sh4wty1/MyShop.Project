import * as S from "./styles"
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { useState } from "react"
import { Cart } from "../Cart/Cart";

export const Header: React.FC = () => {
    const [authBtn, setAuthBtn] = useState(false)
    const [showCart, setShowCart] = useState(false)

    return (
    <S.StyledHeader>
        <S.Wrapped>
            <S.HeaderTitle>MyShop.</S.HeaderTitle>
            <S.ButtonsWrapper>
                <S.AuthButton $auth={authBtn} onClick={() => setAuthBtn(!authBtn)}>
                    {!authBtn ? <>Login <FiLogIn /></> : <>Logout <FiLogOut /></>}
                </S.AuthButton>
                <S.CartButton onClick={() => setShowCart(!showCart)}>
                    Cart
                    <FiShoppingCart />
                </S.CartButton>
            </S.ButtonsWrapper>
        </S.Wrapped> 

        <Cart showCart={showCart}/>   
    </S.StyledHeader>
)
}