import React from 'react';
import './Checkout.css';
import banner from './../../asset/image/soft.png';
import Subtotal from './../Subtotal/Subtotal';
import { useStateValue } from '../StateProvider/StateProvider';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkoutLeft">
                <img src={banner} alt="" className="checkout__ad"/>
                <div>
                    <h2 className="checkout__title">
                        {
                            basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                 />
                            ))
                        }
                    </h2>
                </div>
            </div>
            <div className="checkoutRight">
                <Subtotal />
            </div>
        </div>
    );
};

export default Checkout;