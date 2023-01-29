import React from "react";
import PropTypes from "prop-types";

const ButtonSort = ({ order }) => {
    return (
        <button>
            <i
                className={
                    "bi bi-caret" +
                    (order === "asc" ? "-up-fill" : "-down-fill")
                }
            ></i>
        </button>
    );
};

ButtonSort.propTypes = {
    order: PropTypes.string
};
export default ButtonSort;
