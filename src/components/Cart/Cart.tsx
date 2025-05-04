import * as S from "./styles"

interface CartProps {
    showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({showCart}) => {
    return (
        <S.Container showCart={showCart}>
            <S.Title>Your cart:</S.Title>
        </S.Container>
    )
}