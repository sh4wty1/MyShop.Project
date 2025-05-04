export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number, count: number };
}

export const fetchProducts = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        return data
    } catch(err) {
        console.error("Error fetching products:", err)
    }
}