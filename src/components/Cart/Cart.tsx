import * as S from "./styles"
import { RxCross1 } from "react-icons/rx";

interface CartProps {
    showCart: boolean;
    onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({showCart, onClose}) => {
    return (
        <S.Container showCart={showCart}>
            <S.Wrapper>
                <S.Title>Your cart:</S.Title>
                <S.ExitBtn onClick={onClose}>
                    <RxCross1 />
                </S.ExitBtn>
            </S.Wrapper>
        </S.Container>
    )
}