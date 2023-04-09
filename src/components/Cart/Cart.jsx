import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some porducts</p>
    }
    else{
        <p>thanks for giving your money</p>

    }
    return (
        <div>
            <h3 className={cart.length === 1 ? 'blue' : 'red'}>Order Summery: {cart.length}</h3>
            {cart.length > 2 ? <span className='purple'>Aro kino</span> : <span>fokira</span>}
            <p className={`bold bordered ${cart.length === 3 ? 'yellow' : 'purple'}`}>Something</p>
            {message}
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}
                    >{tshirt.name} <button 
                    onClick={() => handleRemoveFromCart(tshirt._id)}
                    >X</button></p>)
            }
            {
                cart.length === 2 && <p>Double Banzaa</p>
            }
            {
                cart.length === 3 || <h3>3 ta to hoilo na</h3>
            }
        </div>
    );
};

export default Cart;

/*
Conditional rendering
1. use if else to set a variable that will contain an element, component
2. ternary operator: condition ? 'true' : 'false'
3. Logical && : (If the condition is true then the next thing will be displayed)
4. Logical || (if the condition is false then the next thing will be displayed)
*/ 

/*
conditional css class:
1. use ternary
2. ternary inside template string
*/