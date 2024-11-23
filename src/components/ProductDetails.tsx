import React from "react";
import { useParams } from "react-router-dom";
import style from "../styles/product.module.css"
import { useGetProduct } from "../hooks/useProducts";
import LoadingSpinner from "../components/LoadingSpinner";

const ProductDetails: React.FC = () => {
    const { productId } = useParams()
    const { product, loading, error } = useGetProduct(productId)
    if (loading) return <LoadingSpinner />
    if (error) return <p>error................</p>

    const mapper = {
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        imageUrl: product.imageUrl,
        category: product.category
    }

    return (<>
        <div className="container">
            <div className="card">
                <div className="container-fliud">
                    <div className={`${style.wrapper} row`}>
                        <div className={`${style.preview} col-md-6`}>
                            <div className={`${style['preview-pic']} ${style['tab-content']}`}  >
                                <div >
                                    <img src={mapper.imageUrl} />
                                </div>
                            </div>
                        </div>
                        <div className={`${style.details} col-md-6`}>
                            <h3 className={`${style['product-title']}`}>{mapper.name}</h3>
                            <p className={`${style['product-description']}`}>{mapper.description}</p>
                            <h4 className="price">
                                current price: <span>{mapper.price}</span>
                            </h4>
                            <h4 className={style["category"]}>
                                category: <span>{mapper.category}</span>
                            </h4>
                            <div className={`${style['action']}`}>
                                <button className={`${style['add-to-cart']} ${style['btn']} ${style['btn-default']}`} type="button">
                                    add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default ProductDetails;