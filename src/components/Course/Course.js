import React from 'react';
import './Course.css'

const Course = (props) => {
    const { name, img, price, instructor } = props.course;
    const addToCart = props.addToCart;
    
    return (
        <div className="col-md-4">
            <div className="single-item text-center my-3">
                <div className="card">
                    <img className="card-img-top" style={{ height: "200px" }} src={img} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6>Instructor: {instructor}</h6>
                        <h4 className="price">${price}</h4>
                        <button className="btn btn-sm btn-success"
                            onClick={() => addToCart(props.course)}>Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;