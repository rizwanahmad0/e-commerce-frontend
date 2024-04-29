
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state/index'

const Product = ({ products }) => {

    const dipatch = useDispatch()
    const cart = useSelector((state) => state.cart)

    const { addInCart, removeFromCart } = bindActionCreators(actionCreators, dipatch)

    function addToCart(product) {
        addInCart(product);
    }

    function removeCart(product) {
        removeFromCart(product)

    }

    function isSelected(p) {
        const id = cart.find((item) => (item.id === p.id && item.category === p.category))
        if (id) {
            return true
        }
        return false

    }

    return (
        <div className='row'>
            {products.map((product) => (
                < div className="col-md-4 mb-4" >
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">${product.price}</p>
                            {
                                !isSelected(product) && (
                                    <button onClick={() => addToCart(product)} className="btn btn-primary">
                                        Add to Cart
                                    </button>
                                )
                            }
                            {
                                (
                                    isSelected(product) && <button onClick={() => removeCart(product)} className="btn btn-primary">
                                        Remove from Cart
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </div >
            ))}
        </div>


    );
};

export default Product;
