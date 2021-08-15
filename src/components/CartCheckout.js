import React, { useState, useEffect } from 'react'
import { IconName ,FcCurrencyExchange } from "react-icons/fc";
import { RiErrorWarningLine } from "react-icons/ri"
import { currencyFormat } from '../common/currency';
export default function CartCheckout(props) {
    let { cartProduct, typeMoney, changeMoney } = props;
    const [total, setTotal] = useState(0);
    const [totalAll, setTotalAll] = useState(0);
    useEffect(() => {
        (
            async () => {
                let totals = 0;
                let totalAlls = 0;
                cartProduct.forEach(product => {
                    totals += (product.price * (100 - product.discount) / 100) * product.quatity;
                    totalAlls += product.price * product.quatity;
                })
                setTotal(totals)
                setTotalAll(totalAlls)
            }
        )()
        return () => {
            
        }
    })
    return (
        <div className="cart__total-price">
            <div className="cart__total-price-ship">
                <div className="cart__total-price-ship-title">
                    <div>Giao tới</div>
                    <span>Thay đổi</span>
                </div>
                <div className="cart__total-price-ship-human">
                    <div>Thịnh Võ</div>
                    <span>0868913214</span>
                </div>
                <div className="cart__total-price-ship-address">
                    8a/l2 hà thị khiêm quận 12, Phường Trung Mỹ Tây, Quận 12, Hồ Chí Minh
                </div>
            </div>
            <div className="cart__total-price-promotion">
                <div className="cart__total-price-promotion-info">
                    <span>Shoppe khuyễn mãi</span>
                    <div>
                        Có thể chọn 2
                        <span>
                            <RiErrorWarningLine />
                        </span>
                    </div>
                </div>
                <div className="cart__total-price-promotion-choose">
                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/mycoupon/coupon_icon.svg" alt="" />
                    <span>Chọn hoặc nhập khuyễn mãi</span>
                </div>
                <div className="cart__total-price-promotion-choose">
                    <  FcCurrencyExchange />
                    <span onClick={() => changeMoney("usd")}>
                        USD
                    </span>
                    <span onClick={()=> changeMoney("vnd")}>
                        VND
                    </span>
                </div>
            </div>
            <div className="cart__total-price-result">
                <div className="cart__total-price-result-top">
                    <div className="cart__total-price-result-top-price">
                        <span>Tạm tính</span>
                        <div>{currencyFormat(totalAll, 0, typeMoney)}</div>
                    </div>
                    <div className="cart__total-price-result-top-discount">
                        <span>Giảm giá</span>
                        <div>{currencyFormat(totalAll - total, 0, typeMoney)}</div>
                    </div>
                </div>
                <div className="cart__total-price-result-bottom">
                    <span>Tổng cộng</span>
                    <div className="cart__total-price-result-bottom-price">
                        <div>
                            {currencyFormat(total, 0, typeMoney)}
                        </div>
                        <small>(Đã bao gồm VAT nếu có)</small>
                    </div>
                </div>
            </div>
            <div className="cart__total-price-result-buy">
                Mua hàng
            </div>
        </div>
    )
}
