import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => {
    console.log(curNumber, item);
    return curNumber + item.amount;
  }, 0);

  console.log(numberOfCartItem);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
