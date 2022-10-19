import "./Products.scss";
import Card from "../../components/card.jsx";
import { products } from "../../components/menuList.js";
import { useDispatch } from "react-redux";
import { addItem } from "../../actions";

const Products = () => {
    const dispatch = useDispatch();
    const addPrice = (e) => {
        e.preventDefault();
        const item = products.find(i => i.id === +e.currentTarget.dataset.id);
        if (item) {
            dispatch(addItem(item));
        }
    };

    return (
        <div className="container">
            <div className="menu">
                {products.map(
                    ({ id, img, name, description, price, weight, type }) => (
                        <Card
                            key={id}
                            id={id}
                            img={img}
                            name={name}
                            description={description}
                            price={price}
                            weight={weight}
                            type={type}
                            handleClick={addPrice}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default Products;
