import styles from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = props => {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: 'c1', name: 'sushi', price: 10 }].map(cartItem => (
        <li>{cartItem.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>36.22</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;