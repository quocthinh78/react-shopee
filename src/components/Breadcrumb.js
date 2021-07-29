import React from "react";
import PropTypes from "prop-types";

function Breadcrumb(props) {
    return (
        <div className="grid__row">
            <div className="grid__column-12">
                <div className="breadcrumb">
                    <div className="breadcrumb__item">
                        Shopee
                        <svg
                            enableBackground="new 0 0 11 11"
                            viewBox="0 0 11 11"
                            x={0}
                            y={0}
                            className="shopee-svg-icon bQfo7W icon-arrow-right"
                        >
                            <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
                        </svg>
                    </div>
                    <div className="breadcrumb__item">
                        Shopee
                        <svg
                            enableBackground="new 0 0 11 11"
                            viewBox="0 0 11 11"
                            x={0}
                            y={0}
                            className="shopee-svg-icon bQfo7W icon-arrow-right"
                        >
                            <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

Breadcrumb.propTypes = {};

export default Breadcrumb;
