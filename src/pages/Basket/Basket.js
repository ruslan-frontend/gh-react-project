import "./Basket.scss";
import BasketCard from "../../components/basketCard";
import { products } from "../../components/menuList.js";

function Basket() {
  return (
    <section className="section">
      <div className="basket">
        <h1 className="basket__title">корзина с выбранными товарами</h1>
        {products.map((key) => {
            return (
              <BasketCard
                img={key.img}
                name={key.name}
                price={key.price}
              />
            );
          })}
      </div>
      <div className="footer">
        <p className="footer__description">
          заказ на сумму:&nbsp;<span>6 220 &#8381;</span>
        </p>
        <button className="footer__button">Оформить заказ</button>
      </div>
    </section>
  );
}

export default Basket;
