import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { totalFormat, currencyFormat } from "./../common/currency"
function CartItem(props) {
    const { product } = props;
    const [quantity, setQuantity] = useState(product.quatity);
    return (
        <div className="cart__list-total">
            <div className="grid__row">
                <div className="cart__list-total-name col-1">
                    <input type="checkbox" />
                    <img
                        src={product.image}
                        alt=""
                    />
                    <div className="cart__list-total-name-title">
                        {product.name}
                    </div>
                </div>
                <div className="cart__list-total-price col-2">
                    <div className="cart__list-total-price--after">{currencyFormat(product.price * (100 - product.discount) / 100)}</div>
                    <div className="cart__list-total-price--before">{currencyFormat(product.price)}</div>
                </div>
                <div className="cart__list-total-quanti col-3">
                    <button
                        className="cart__list-total-quanti-decrement"
                        disabled={quantity <= 1}
                        onClick={() => {
                            setQuantity(quantity - 1);
                            props.onHandleUpdateCart(product, quantity - 1)
                        }}
                    >
                        <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg"
                            alt=""
                        />
                    </button>
                    <div className="cart__list-total-quanti-quantity">
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </div>
                    <button
                        className="cart__list-total-quanti-increment"
                        disabled={quantity >= 10}
                        onClick={() => {
                            setQuantity(quantity + 1);
                            props.onHandleUpdateCart(product, quantity + 1)
                        }}
                    >
                        <img
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg"
                            alt=""
                        />
                    </button>
                </div>
                <div className="cart__list-total-total col-4">{currencyFormat(product.quatity * (product.price * (100 - product.discount) / 100))}</div>
                <div className="cart__list-total-delete col-5">
                    <RiDeleteBin6Line />
                </div>
            </div>
        </div>
    );
}

export default CartItem;
