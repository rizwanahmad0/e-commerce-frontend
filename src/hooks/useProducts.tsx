

import { useState, useEffect } from "react";
import { Product as ProductType } from '../types/ProductType'


export const useProducts = (): { products: ProductType[], loading: boolean, error: Error | null } => {

    const [products, setProducts] = useState<ProductType[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const fetchProducts = async (): Promise<void> => {
            try {
                const response = await fetch('https://dummyjson.com/products')
                if (typeof response === 'object' && response !== null) {

                    if (!response.ok) {
                        throw new Error();
                    }
                    const data = await response.json();

                    let mapper = data.products.map((item: any) => {
                        return {
                            id: item.id,
                            name: item.title,
                            price: item.price,
                            description: item.description,
                            imageUrl: item.images[0],
                            category: item.category
                        }
                    })

                    setProducts(mapper)
                    setLoading(false)
                }

            } catch (err) {
                setError(new Error('data not found'))
                setLoading(false)
            }

        }
        fetchProducts()
    }, [])

    return { products, loading, error }
}

export const useGetProduct = (id: unknown): { product: ProductType, loading: boolean, error: Error | null } => {
    const [product, setProduct] = useState<ProductType>({})
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const fetchProducts = async (): Promise<void> => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`)
                if (!response.ok) {
                    throw new Error();
                }

                const data = await response.json();
                const item = {
                    id: data.id,
                    name: data.title,
                    price: data.price,
                    description: data.description,
                    imageUrl: data.images[0],
                    category: data.category
                }
                setProduct(item)
                setLoading(false)
            } catch (err) {
                setError(new Error('unable to fetch'))
            }
        }
        fetchProducts()
    }, [])

    return { product, loading, error }
}

export const useProductSearch = (products: ProductType[]): { query: string, setQuery: Function, filteredProducts: ProductType[] } => {

    const [query, setQuery] = useState<string>('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        if (products.length > 0) {
            const result = products.filter((product: ProductType) =>
                product.category?.toLowerCase().includes(query.toLowerCase()) || product.name?.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredProducts(result);
        }
    }, [query, products]);

    return { query, setQuery, filteredProducts };

}




