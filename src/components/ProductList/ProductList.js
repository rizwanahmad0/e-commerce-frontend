
import Product from '../Product/Product'
import React, { useState } from 'react';
import Checkout from '../CheckOut/CheckOut'
import { useDispatch, useSelector } from 'react-redux'

const ProductList = ({ products }) => {
    const cart = useSelector((state) => state.cart)
    const [isCheckout, setIsCheckoutOpen] = useState(false);

    const groupItems = []
    const selectedProduct = []
    const groupItem = (products) => {
        const category = {}
        products.forEach(element => {
            category[element.category] = element.category
        });
        for (let key in category) {
            let item = {}
            item.category = key
            item.products = products.filter((item) => item.category === key)
            groupItems.push(item)
        }
        // console.log(groupItems)
    }

    function openCheckOut() {
        if (!cart.length) {
            window.alert("Please add product!");
            return
        }
        setIsCheckoutOpen(true)
    }


    function clouseCheckOut() {
        setIsCheckoutOpen(false)
    }
    return (
        <div className="product-list container">
            {groupItem(products)}
            {groupItems.map(item => (
                <div>
                    {!isCheckout && (<div >
                        <p>{item.category}</p>
                        <Product products={item.products} />
                    </div>)}
                </div>

            ))}
            <div>
                {!isCheckout && (<button onClick={openCheckOut} className="btn btn-primary mb-5" >
                    checkout
                </button>)}
            </div>


            {isCheckout &&
                <div>
                    <Checkout chooseProduct={selectedProduct}  ></Checkout>
                </div>
            }

            <div>
                {isCheckout && (<button onClick={clouseCheckOut} className="btn btn-primary m-3" >
                    back
                </button>)}
            </div>


        </div>
    );
};

export default ProductList;