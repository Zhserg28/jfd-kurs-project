import React from "react";
import User from "./user";

const Users = ({ users, ...rest }) => {
    return (
        <>
            {users.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <User 
                                _id={user._id}
                                name={user.name}
                                qualities={user.qualities}
                                profession={user.profession.name}
                                completedMeetings={user.completedMeetings}
                                rate={user.rate}
                                bookmark={user.bookmark}   
                                onToggBookMark={()=>rest.onToggBookMark(user._id)}                             
                                onDelete={rest.onDelete}                                                                
                            />                       
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

export default Users;