import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../Reducer/reducer';
import { useStateValue } from '../StateProvider/StateProvider';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <div> 
                        {/* {`${value}`} */}
                        <p>
                        Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </div>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
        </div>
    );
};

export default Subtotal;