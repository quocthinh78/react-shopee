import React from "react";


function Raiting(props) {
    const showRaiting = (n) => {
        const result = [];
        for (let i = 0; i < n; i++) {
            result.push(<i key={i} className="home-product-item__start--gold fas fa-star" />)

        }
        for (let j = 0; j < 5 - n; j++) {
            result.push(<i className="fas fa-star" key={j + 333} />)

        }
        return result;
    }
    const { star } = props;
    return (
        <div className="detail__evalute-item__rating">
            {showRaiting(star)}
        </div>
    );
}

export default Raiting;
