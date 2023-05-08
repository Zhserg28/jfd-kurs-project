import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import { useHistory } from "react-router-dom";
import UserCard from "./cards/userCard";
import QualitiesCard from "./cards/qualitiesCard";
import MeetingsCard from "./cards/meetingsCard";
import CommentsListComponent from "./comments/commentsListComponent";
import CommentComponents from "./comments/commentComponents";

const UserPage = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);
    const handleClick = () => {
        history.push(history.location.pathname + "/edit");
    };
    if (user) {
        return (
            <>
                <div className="col-md-4 mb-3">
                    <UserCard
                        name={user.name}
                        professionName={user.profession.name}
                        rate={user.rate}
                        onSettings={handleClick}
                    />
                    <QualitiesCard qualities={user.qualities} />
                    <MeetingsCard meetings={user.completedMeetings} />
                </div>
                <div className="col-md-8">
                    <CommentsListComponent />
                    <CommentComponents userId={userId} userName={user.name} />
                </div>
            </>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
