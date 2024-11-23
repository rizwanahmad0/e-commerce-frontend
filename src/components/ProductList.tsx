import React from "react"
import Product from "./Product"
import { Product as ProductType } from '../types/ProductType'

interface ProductListProps {
    products: ProductType[]
}

const ProductList: React.FC<ProductListProps> = (props) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    {props.products.map((item) => {
                        return <div className="col-md-3 mt-2" key={item.id}>
                            <Product product={item} />
                        </div>
                    })}

                </div>
            </div>
        </>
    );
}

export default ProductList;