import React from "react";
import PropTypes from "prop-types";
const QualitiesCard = ({ qualities }) => {
    const getQualities = () => {
        return qualities.map((qual) => (
            <span className={"badge m-1 bg-" + qual.color} key={qual._id}>
                {qual.name}
            </span>
        ));
    };
    return (
        <>
            <div className="card mb-3">
                <div className="card-body d-flex flex-column justify-content-center text-center">
                    <h5 className="card-title">
                        <span>Qualities</span>
                    </h5>
                    <p className="card-text">{getQualities()}</p>
                </div>
            </div>
        </>
    );
};
QualitiesCard.propTypes = {
    qualities: PropTypes.array.isRequired
};

export default QualitiesCard;
