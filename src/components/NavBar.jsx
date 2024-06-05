import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
      <CartWidget />
    </nav>
  );
}