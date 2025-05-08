import * as S from "./styles"
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { useState } from "react"
import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";

export const Header: React.FC = () => {
    const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer)
    const dispatch = useDispatch()
    const [authBtn, setAuthBtn] = useState(false)
    const [showCart, setShowCart] = useState(false)

    const handleUserAuth = () => {
        setAuthBtn(!authBtn)
        if (user === null) {
            dispatch({
                type: "user/login",
                payload: {
                    name: "User name",
                    email: "user@example.com"
                }
            })
        } else {
            dispatch({
                type: "user/logout",
            })
        }
    }
    
    return (
    <S.StyledHeader>
        <S.Wrapped>
            <S.HeaderTitle>MyShop.</S.HeaderTitle>
            <S.ButtonsWrapper>
                <S.AuthButton $auth={authBtn} onClick={handleUserAuth}>
                    {!authBtn ? <>Login <FiLogIn /></> : <>Logout <FiLogOut /></>}
                </S.AuthButton>
                <S.CartButton onClick={() => setShowCart(!showCart)}>
                    Cart
                    <FiShoppingCart />
                </S.CartButton>
            </S.ButtonsWrapper>
        </S.Wrapped> 

        <Cart showCart={showCart} onClose={() => setShowCart(false)}/>   
    </S.StyledHeader>
)
}