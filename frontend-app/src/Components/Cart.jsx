import React, { useState, useEffect } from 'react';
import "./Cart.css"

function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Load the cart data from local storage on component mount
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Function to calculate the order total
  const calculateOrderTotal = () => {
    return cart.reduce((total, item) => total + item.Price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      {/* <h1>Your Cart</h1> */}
      {cart.length === 0 ? (
        <h3 className='p1'>No products added to the cart.</h3>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
            <img src={item.Image} alt={item.Name} />

              <h2>Name: {item.Name}</h2>
              <p>Price: ${item.Price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        // <div className="cart-summary">
        //   <p>Order Total: ${calculateOrderTotal()}</p>
        //   <p>Estimated Delivery Date: {getEstimatedDeliveryDate()}</p>
        // </div>

        <div className="card">
   <a className="card1" href="#">
           <p>Order Total: ${calculateOrderTotal()}</p>
          <p>Estimated Delivery Date: {getEstimatedDeliveryDate()}</p>
    <div className="go-corner" href="#">
      <div className="go-arrow">
        →
      </div>
    </div>
  </a>
</div>
      )}
    </div>
  );
}

// Function to get an estimated delivery date (you can implement your own logic here)
const getEstimatedDeliveryDate = () => {
  const currentDate = new Date();
  // Assuming a delivery time of 3 days
  const deliveryDate = new Date(currentDate);
  deliveryDate.setDate(currentDate.getDate() + 3);
  return deliveryDate.toDateString();
};

export default CartPage;