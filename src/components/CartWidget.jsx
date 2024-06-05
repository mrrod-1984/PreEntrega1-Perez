import ItemListContainer from "./ItemListContainer";


const cart = "./cart.svg";

export default function CartWidget() {
  return (
    <div>
      <img src={cart} alt="cart" className="w-[50px] h-[50px]"/>
      <ItemListContainer greeting="5" />
    </div>
  );
}