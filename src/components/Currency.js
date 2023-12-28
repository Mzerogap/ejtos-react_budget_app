import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const [newCurrency,setNewCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }
    return (
        <div className='alert alert-secondary'>
             <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="currencySelector">Currency ({newCurrency})</label>
            </div>
            <select className="custom-select" id="currencySelector" onChange={handleCurrencyChange}>
                <option defaultValue>Choose...</option>
                <option value="$" name="Dollar">$ Dollar</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;

