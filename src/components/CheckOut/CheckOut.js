
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';


const Checkout = (chooseProduct) => {
    const dipatch = useDispatch()
    const cart = useSelector((state) => state.cart)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        product: {}

    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:4000/product"

            formData.product = cart
            const data = await axios.post(url, formData)
            window.alert(data.data.message)

        } catch (err) {
            window.alert("Something Went Wrong")
        }


    };

    return (
        <form onSubmit={handleSubmit} className="container mt-4">

            <h2 className="mb-4">Checkout</h2>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Place Order</button>
        </form>
    );
};

export default Checkout;
