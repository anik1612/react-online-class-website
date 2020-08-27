import React from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import fakeData from '../../fakeData';
import './Shop.css'


const Shop = () => {
    const [courses] = useState(fakeData); 
    const [cart, setCart] = useState([]);

    //add item to cart
    const addToCart = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }

    //get total price
    const totalPrice = cart.reduce((total, current) => total + current.price, 0);
    
    return (
        <div className="shop-container border">
            <h1 className="text-center pt-3">Available Course</h1>
            <div className="row content-area container-fluid justify-content-center">
                <div className="col-md-9 row course-area border-right border-top pt-3 courses-container">
                    {courses.map(course => <Course course={course} key={course.id} addToCart={addToCart}></Course>)}
                </div>

                <div className="col-md-3 cart-area pt-4 cart-container border-top">
                <h3 className="text-center">Order Summary</h3>
                    <h4 className="text-center">Cart: {cart.length} </h4>
                    <ul className="list-group">
                        {cart.map(course => <Cart course={course} />)}
                    </ul>
                    <button type="button" className="btn btn-success btn-block mb-5">
                        Checkout <span className="badge badge-light">$ {totalPrice}</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Shop;