import React from "react";
import "./Card.css"
import PropTypes from "prop-types";

const Card = ({lang, img, fcolor, scolor}) => {
    return(
        <div
            className="card"
            style={{ background: `linear-gradient(to left, ${fcolor}, ${scolor})` }}
        >
            <img src={ img } alt="Lang.svg"/>
            <h3>
                { lang }
            </h3>
        </div>
    )
}

// Definiendo los proptypes de Card
Card.propTypes = {
    lang: PropTypes.string,
    img: PropTypes.string,
    fcolor: PropTypes.string,
    scolor: PropTypes.string
}

export default Card