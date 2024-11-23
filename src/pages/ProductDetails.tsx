import React from "react";
import ProductDetails from "../components/ProductDetails";
import NavBar from "../components/NavBar";




const ProductDetailsPage: React.FC = () => {

    return (<>
        <NavBar show={{ search: false, dropDown: false }} />
        <ProductDetails />
    </>);
}

export default ProductDetailsPage;