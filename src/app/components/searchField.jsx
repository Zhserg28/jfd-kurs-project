import React from "react";
import PropTypes from "prop-types";

const SearchField = ({ value, onSelect }) => {
    return (
        <div className="mb-4">
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={onSelect}
                    value={value}
                    className="form-control w-100"
                />
            </form>
        </div>
    );
};

SearchField.propTypes = {
    value: PropTypes.string,
    onSelect: PropTypes.func
};
export default SearchField;
