import React, { useState } from "react";

import api from "../api";

const Users=()=>{
    const [users, setUsers] = useState(api.users.fetchAll());
  
    let count = users.length;

    const handleDelete = (userId) => {
        count--;
        setUsers(prevState=>prevState.filter(user=>user._id!==userId))       
    }

    const renderPhrase = (number) => {
        if (number === 0) {
            return "Никто с тобой не тусанет";
        } else
        if (number%10 === 1 || (number > 4 && number < 20) || (number%10 > 4 && number >= 20)) {
            return `${number} человек тусанет с тобой сегодня`
        } else {
            return `${number} человека тусанет с тобой сегодня`
        }
    }
     
    const getBadgeClasses = () => {
        let classes = "badge m-2 ";
        classes += count === 0 ? "bg-warning" : "bg-primary";
        return classes;
    }

    const getBadgeQuality = (color) => {
        return `badge m-2 bg-${color}`;
    }

    return (
        <>
            <span className={getBadgeClasses()}>{renderPhrase(count)}</span>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (                      
                        <tr key={user._id}>
                            <th scope="row">{user.name}</th>
                            <td>{user.qualities.map((quality) =>
                                <span 
                                    className={getBadgeQuality(quality.color)} 
                                    key={quality._id}
                                >
                                    {quality.name}
                                </span>
                            )}</td>
                            <td 
                                key={user.profession._id}
                            >
                                {user.profession.name}
                            </td>
                            <td>{user.completedMeetings}</td>
                            <td>{`${user.rate}/5`}</td> 
                            <td                                
                                className="badge bg-danger m-2" 
                                onClick={()=>handleDelete(user._id)}
                            >
                                Delete
                            </td>
                        </tr>                      
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Users;