import { Link } from "react-router-dom";
import "./card.scss";

function Card({ id, img, name, description, price, weight, handleClick, type }) {
    return (
        <Link className="card" to={`/plate/${id}`}>
            <img className="card__image" src={img} alt={name} />
            <h2 className="card__title">{name}</h2>
            <p className="card__description">{description}</p>
            <div className="card__info">
                <span className="card__info-price">{price} &#8381; </span>
                <span className="card__info-count">
                    &nbsp;<span>/</span>&nbsp;{weight} {type || "г"}
                </span>
                <button className="card__info-button" data-id={id} onClick={handleClick}>
                    <svg
                        className="card__info-addButton"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="15" cy="15" r="14.5" stroke="white" />
                        <path
                            d="M15 9.28564V20.3571"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                        />
                        <path
                            d="M20.3569 14.8214L9.28551 14.8213"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                        />
                    </svg>
                </button>
            </div>
        </Link>
    );
}

export default Card;
