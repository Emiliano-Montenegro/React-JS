import React from 'react';

const CartWidget = () => {
    return (
        <div>
            <button className="btn btn-outline-primary position-relative">
                <i className="bi bi-cart2"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    5
                    <span class="visually-hidden">productos en Cart</span>
                </span>
            </button>
        </div>
    );
};

export default CartWidget;
