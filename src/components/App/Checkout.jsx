// import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Checkout(){
 const checkoutItems = useSelector(store => store.orderList);

 return(
    <section>
        <table>
            <tr>
                <th>Items</th>
                <th>Price</th>
            </tr>
            <tr>
                
            </tr>
        </table>
    </section>
 )
}

export default Checkout;