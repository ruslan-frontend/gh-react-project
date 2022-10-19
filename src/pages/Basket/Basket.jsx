import "./Basket.scss";
import BasketCard from "../../components/basketCard";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const Basket = () => {
    const basket = useSelector((store) => store);
    const totalPrice = useMemo(() => basket.reduce((acc, i) => acc + i.price, 0), [basket]);
    
    return (
        <section className="section">
            <div className="basket">
                {basket.map(
                    ({ uniqueId, img, name, price }) => (
                        <BasketCard key={uniqueId}
                            uniqueId={uniqueId}
                            img={img}
                            name={name}
                            price={price}
                        />
                    )
                )}
            </div>
            <footer className="footer">
                <div className="footer__content">
                    <p className="footer__description">
                        заказ на сумму:&nbsp;<span>{totalPrice} &#8381;</span>
                    </p>
                    <button className="footer__button">Оформить заказ</button>
                </div>
            </footer>
        </section>
    );
};

export default Basket;
