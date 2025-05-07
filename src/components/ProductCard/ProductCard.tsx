import * as S from "./styles"
import { FiShoppingCart } from "react-icons/fi";
import { Product } from "../../services/products"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";

interface ProductCardProps {
    product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const dispatch = useDispatch()

    const handleAddProductToCart = () => {
        dispatch({
            type: "cart/add-product",
            payload: product,
        })
    }

    return (
        <S.Card>
            <S.ProductImage src={product.image}></S.ProductImage>
            <S.ProductName>{product.title}</S.ProductName>
            <S.ProductInfos>
                <S.Review>
                    { Array.from({ length: 5 }).map((_, index) => index < Math.round(product.rating.rate) ? (<AiFillStar key={index}/>) : (<AiOutlineStar />)) }
                    ({product.rating.rate})
                </S.Review>
                <S.Price>${product.price}</S.Price>
            </S.ProductInfos>
            <S.AddToCartBtn onClick={handleAddProductToCart}>Add to cart<FiShoppingCart /></S.AddToCartBtn>
        </S.Card>
    )
}