import { useSelector } from "react-redux";
import * as S from "./styles"
import { RxCross1 } from "react-icons/rx";
import { RootReducer } from "../../redux/root-reducer";
import { CartItem } from "../CartItem/CartItem";


interface CartProps {
    showCart: boolean;
    onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({showCart, onClose}) => {
    const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)

    const total = cart.reduce((totalCart, product) => {
        return totalCart + product.price
    }, 0)

    return (
        <S.Container showCart={showCart}>
            <S.Wrapper>
                <S.Title>Your cart:</S.Title>
                <S.ExitBtn onClick={onClose}>
                    <RxCross1 />
                </S.ExitBtn>
            </S.Wrapper>
            <S.ItemsList>
                {cart.map((product) => (
                    <CartItem itemId={product.id} itemPrice={product.price} itemName={product.title} />
                ))}
            </S.ItemsList>

            <S.Total>Total: ${total}</S.Total>
        </S.Container>
    )
}