import { Link, useParams } from 'react-router-dom';
import './styles/Navigation.css';
import shoppingCart from './images/shopping-cart.svg';

const Navigation = ({ isShop, items }) => {
  return (
    <nav className='navigation-bar'>
      <div className='navigation-links'>
        <Link to='/' className='nav-link'>
          Home
        </Link>
        <Link to='/shop' className='nav-link'>
          Shop
        </Link>
      </div>
      {isShop ? (
        <Link to='/shopping-cart' className='navigation-cart'>
          <img className='shopping-cart-image' src={shoppingCart} alt='shopping-cart'></img>
          <div className='items-in-cart'>{items.length}</div>
        </Link>
      ) : (
        ''
      )}
    </nav>
  );
};
export default Navigation;
