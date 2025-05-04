import { ProductCard } from "../ProductCard/ProductCard"
import * as S from "./styles"
import { fetchProducts, Product } from "../../services/products"
import { useState, useEffect } from "react"
import { ThreeDots } from 'react-loader-spinner';

export const ProductsList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        // Função para buscar os produtos
        const loadProducts = async () => {
            const fetchedProducts = await fetchProducts()
            if (fetchedProducts) {
                setProducts(fetchedProducts)
            }
        }
        
        loadProducts()
    }, [])

    return(
        <S.Container>
            {products.length === 0 ? (
            <ThreeDots
            height={80}
            width={90}
            radius={9}
            color="#282832"
            ariaLabel="loading"
            wrapperStyle={{ display: 'flex', justifyContent: 'center', alignItems: "center"}}
            />) :products.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </S.Container>
    )
}