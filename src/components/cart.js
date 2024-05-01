import "../styles/cart.css";

function Cart() {
  const monsteraPrice = 8;
  const ivyPrice = 10;
  const flowerPrice = 15;
  return (
    <div class="lmj-cart">
      <h2>Panier</h2>
      <ul>
        <li>Monstera : {monsteraPrice}€</li>
        <li>lierre : {ivyPrice}€</li>
        <li>Fleurs : {flowerPrice}€</li>
      </ul>
      Total : {monsteraPrice + ivyPrice + flowerPrice} €
    </div>
  );
}

export default Cart;
