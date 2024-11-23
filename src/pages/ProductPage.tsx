
import React from "react";
import ProductList from "../components/ProductList";
import { useProducts, useProductSearch } from "../hooks/useProducts";
import LoadingSpinner from "../components/LoadingSpinner";
import NavBar from "../components/NavBar";
import Test from "../components/test";


const ProductPage: React.FC = () => {

    const { products, loading, error } = useProducts()
    const { query, setQuery, filteredProducts } = useProductSearch(products);

    if (loading) return <LoadingSpinner />
    if (error) return <p>error................</p>



    return (<>
        <NavBar products={filteredProducts} setQuery={setQuery} query={query} show={{ search: true, dropDown: true }} />
        <ProductList products={filteredProducts} />
    
    </>);
}

export default ProductPage;