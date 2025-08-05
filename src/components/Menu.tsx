import Logo from './Logo';
import MenuToggle from './MenuToggle';
import Navigation from './Navigation';
import ShoppingCart from './ShoppingCart';

const Menu = () => {
  return (
    <div className="menu container">
      <Logo />
      <MenuToggle />
      <Navigation />
      <ShoppingCart />
    </div>
  );
};

export default Menu;
