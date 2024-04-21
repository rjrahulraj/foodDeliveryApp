

import { useContext, useEffect, useState } from 'react'
import styles from './Cart.module.css'
import { storeContext } from '../../context/storeContext'

const Cart = () => {

  const {food_list,cartItem,removeFromCart,getTotalCartAmount}=useContext(storeContext)
  const [totalAmt, setTotalAmt]=useState(0);

  useEffect(()=>{
      setTotalAmt(getTotalCartAmount);
  },[cartItem])
  

  return (
  
    <div>
      
     {Object.keys(cartItem).length===0?<h1  className={styles.textCenter}> Cart is Empty !!!   </h1>:<div className={styles.cart}>
      <div className={styles.cartItems}>
        <div className={styles.cardItemsTitle}>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <br />
        <hr />
        {food_list.map((item, index)=>{
          if(cartItem[item._id]>0)
          {
            return (
              <div key={index}>
              <div key={index} className={styles.cartItemDetails}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>{item.price*cartItem[item._id]}</p>
                <span onClick={()=>{removeFromCart(item._id)}}>X</span>
                 </div>
                <hr/>
                </div>   
            )
          }
        })}

      </div>
      <div className={styles.order_summary}>
          <div className={styles.orderfood}>
               <h1>Cart Totals</h1>

              <div className={styles.totalAmt}>
                <p>SubTotal  </p>
                <p>${totalAmt}</p>
              </div>
              <div className={styles.totalAmt}>
                <p>Delivery Fee </p>
                <p>$ 12</p>
              </div>
              <div className={styles.totalAmt}>
                <p>Total  </p>
                <p>${totalAmt+12}</p>
              </div>
              <button className={styles.checkoutBtn}>Proceed to checkout</button>

          </div>
          <div className={styles.coupon}>
            <p>If you have a coupon code</p>
            <div className={styles.couponCode}>
               <input placeholder='promo code' type="text" /> 
               <button>Submit</button>
            </div>
          </div>
      </div>
    </div>}
    </div>
  )
}
export default Cart
