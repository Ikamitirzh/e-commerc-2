import React, { useEffect, useState } from 'react'
import PageHeader from "../components/PageHeader"
import { Link } from 'react-router-dom'
import delImgUrl from "../assets/images/shop/del.png"
import CheckOutPage from './CheckOutPage'

const CartPage = () => {
  const [cartItem, setCartItem] = useState([])


  useEffect(() => {
    //fetch cart item from local storage
    const storedCartItem = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItem(storedCartItem);
  }, []);

  //calculate prices
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  }

  //handle quantity increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItem([...cartItem]);

    //update local storage
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }


  //handle quantity decrease
  const handledecrease = (item) => {
    if(item.quantity > 1) {
      item.quantity -= 1;
      setCartItem([...cartItem]);
  
      //update local storage
      localStorage.setItem("cart", JSON.stringify(cartItem));

    }
  }


  // handle item remove
  const handleRemoveItem = (item) => {
    const updateCart = cartItem.filter((cartItem) => cartItem.id !== item.id)

    //update new cart
    setCartItem(updateCart);
    updateLocalStorage(updateCart)

  } 

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart" , JSON.stringify(cart))
  }

  //cart subtotal
  const cartSubtotal = cartItem.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0)

  //order total
  const orderTotal = cartSubtotal

  return (
    <div>
    <PageHeader title={"Shop Cart"} curPage={"Cart Page"}/>

    <div className="shop-cart padding-tb">
      <div className="container">
        <div className="section-wrapper">
          {/* cart top */}
          <div className="cart-top">
            <table>
              <thead>
                <tr>
                  <th className='cat-product'>Product</th>
                  <th className='cat-price'>Price</th>
                  <th className='cat-quantity'>Quantity</th>
                  <th className='cat-total'>Total</th>
                  <th className='cat-edit'>Edit</th>
                </tr>
              </thead>

              {/* table body */}
              <tbody>
                {
                  cartItem.map((item, index) => (
                    <tr key={index}>
                      <td className='product-item car-product'>
                        <div className="p-thumb">
                          <Link to="/shop"><img src={item.img} alt='' /></Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>

                      <td className='cat-price'>$ {item.price}</td>
                      <td className='cat-quantity'>
                        <div className="cart-plus-minus">
                          <div className="dec qtybutton" onClick={() => handledecrease(item)}>-</div>
                          <input type='text' className='cart-plus-minus-box' name='qtybutton' value={item.quantity}/>
                          <div className="inc qtybutton" onClick={() => handleIncrease(item)}>+</div>
                        </div>
                      </td>
                      <td className='cat-toprice'>${calculateTotalPrice(item)}</td>
                      <td className='cat-edit'>
                        <a href='#' onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt='' />
                        </a>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>

          {/*.......................... cart top end ................................ */}
          {/* cart button */}
          <div className="cart-bottom">
            {/* checkout box */}
            <div className="cart-checkout-box">
              <form className='coupon'>
                <input className='cart-page-input-text' type='text' name='coupon' id='coupon' 
                placeholder='Coupon Code ...'/>
                <input type='submit' value="Apply Coupon" />
              </form>

              <form className='cart-checkout'>
                <input type='submit' value="Update Cart" />
                <div>
                  <CheckOutPage />
                </div>
              </form>
            </div>

            {/* ---------checkout box end ----------- */}

            {/* shopping box */}
            <div className="shiping-box">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="calculate-shiping">
                    <h3>Calculate Shiping</h3>
                    <div className="outline-select">
                      <select>
                        <option value="uk">United Kingdom (UK)</option>
                        <option value="uk">Qazvin</option>
                        <option value="uk">Bangeladesh</option>
                        <option value="uk">India</option>
                        <option value="uk">Iran</option>
                        <option value="uk">Nepal</option>
                      </select>
                      <span className='select-icon'>
                        <i className='icofont-rounded-down'></i>
                      </span>
                    </div>

                    <div className="outline-select shiping-select">
                    <select>
                        <option value="uk">New York</option>
                        <option value="uk">London</option>
                        <option value="uk">Ohaka</option>
                        <option value="uk">Korachi</option>
                        <option value="uk">New Dehli</option>
                      </select>

                      <span className='select-icon'>
                        <i className='icofont-rounded-down'></i>
                      </span>
                    </div>
                    <input type='text' name="postalCode" id='postalCode' placeholder='Postocode/ZIP *' className='cart-page-input-text'/>
                    <button type='submit'>Update Adress</button>
                  </div>
                </div>
                <div className='col-md-6 col-12'>
                  <div className="cart-overview">
                    <h3>Cart Total</h3>
                    <ul className='lab-ul'>
                      <li>
                        <span className='pull-left'>Cart Subtotal</span>
                        <p className='pull-right'>$ {cartSubtotal}</p>
                      </li>

                      <li>
                        <span className='pull-left'>Shiping and Handling</span>
                        <p className='pull-right'>Free Shiping</p>
                      </li>

                      <li>
                        <span className='pull-left'>Order Total</span>
                        <p className='pull-right'>$ {orderTotal.toFixed(2)}</p>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CartPage