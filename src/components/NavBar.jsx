import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <nav className="flex flex-row">
        <ul className="basis-1/2">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
      <CartWidget className="basis-1/2" />
    </nav>
  );
}