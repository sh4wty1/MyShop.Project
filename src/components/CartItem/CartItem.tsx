import { useDispatch } from "react-redux";
import * as S from "./styles"
import { Trash2 } from 'lucide-react';

interface CartItemProps {
    itemPrice: number;
    itemName: string;
    itemId: number;
}


export const CartItem: React.FC<CartItemProps> = ({ itemPrice, itemName, itemId}) => {
    const dispatch = useDispatch()
    const handleRemoveProductFromCart = () => {
        dispatch({
            type: "cart/remove-product",
            payload: { id: itemId },
        })
    }

    return (
        <S.Wrapper>
            <S.Price>${itemPrice}</S.Price>
            <S.ProductName>{itemName}</S.ProductName>
            <S.RemoveBtn onClick={handleRemoveProductFromCart}><Trash2 /></S.RemoveBtn>
        </S.Wrapper>
    )
}