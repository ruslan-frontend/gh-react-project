import { useParams } from "react-router-dom";
import { products } from "../../components/menuList";
import "./Plate.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../../actions";
import { useCallback } from "react";

const Plate = () => {

    const params = useParams();
    const item = products.find(
        (product) => product.id === +params.id
    );
    const { price, weight, img, name, description, type } = item;
    const dispatch = useDispatch();
    const addPrice = useCallback(() => {
        if (item) {
            dispatch(addItem(item));
        }
    }, [item]);



    return (
        <section className="plate">
            <div className="container">
                <div className="plate__card">
                    <img className="plate__card-img" src={img} alt={name} />
                    <div className="plate__info">
                        <h2 className="plate__info-title">{name}</h2>
                        <p className="plate__info-description">{description}</p>
                        <div className="plate__info-footer plate__footer">
                            <span className="plate__footer-price">
                                {price} &#8381;{" "}
                            </span>
                            <span className="plate__footer-count">
                                &nbsp;<span>/</span>&nbsp; {weight}{" "}
                                {type || "г"}.
                            </span>
                            <button onClick={addPrice} className="plate__footer-button">
                                В корзину
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plate;
