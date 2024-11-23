
import React from 'react'
import { Product as ProductType } from '../types/ProductType'
import { useNavigate } from 'react-router-dom';
import style from '../styles/product-list.module.css'

interface ProductProps {
    product: ProductType
}

const Product: React.FC<ProductProps> = (props) => {
    const navigate = useNavigate()
    return (<>
        <div className={`card ${style.card}`} style={{ width: "18rem" }}>
            <div className={`${style['image-container']}`}>
                <img src={props.product.imageUrl}  alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.product.name}</h5>
                <p className="card-text">{props.product.price}</p>
                <a href="#" className="btn btn-primary" onClick={() => { navigate(`/product/${props.product.id}`) }}>
                    view
                </a>
            </div>
        </div>
    </>);
}

export default Product;