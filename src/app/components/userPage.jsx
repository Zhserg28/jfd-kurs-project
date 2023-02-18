import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../api";
import { useHistory } from "react-router-dom";
import QualitiesList from "./qualitiesList";

const UserPage = ({ id }) => {
    const [currentUser, setCurrentUser] = useState();
    const history = useHistory();

    useEffect(() => {
        api.users.getById(id).then((user) => setCurrentUser(user));
    }, []);

    const handleUsers = () => {
        history.replace("/users");
    };
    if (currentUser) {
        return (
            <>
                <h1>{currentUser.name}</h1>
                <h2>Профессия: {currentUser.profession.name}</h2>
                <QualitiesList qualities={currentUser.qualities} />
                <h6>completedMeetings: {currentUser.completedMeetings}</h6>
                <h2>Rate: {currentUser.rate}</h2>
                <button
                    onClick={() => {
                        handleUsers();
                    }}
                >
                    Все Пользователи
                </button>
            </>
        );
    }
    return <h1>Loading</h1>;
};

UserPage.propTypes = {
    id: PropTypes.string.isRequired
};

export default UserPage;
