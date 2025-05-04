import * as S from "./styles"
import { FiShoppingCart } from "react-icons/fi";
import { Product } from "../../services/products"
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface ProductCardProps {
    product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
            <S.AddToCartBtn>Add to cart<FiShoppingCart /></S.AddToCartBtn>
        </S.Card>
    )
}