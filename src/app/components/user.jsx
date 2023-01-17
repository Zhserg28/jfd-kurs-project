import React from "react";
import Qualitie from "./qualities";
import BookMark from "./bookmark";

const User = (props) => {
    return (
        <>
        <tr key={props._id}>
            <td>{props.name}</td>
            <td>
                {props.qualities.map((item) => (
                    <Qualitie  
                        color={item.color}
                        name={item.name}
                        _id={item._id}
                    />                    
                ))}
            </td>
            <td>{props.profession}</td>
            <td>{props.completedMeetings}</td>
            <td>{props.rate} /5</td>
            <td>
                <button 
                    className="btn btn-outline-dark"
                    onClick={() => props.onToggBookMark(props._id)}
                > 
                    <BookMark                     
                        status={props.bookmark}                                                                                   
                    />    
                </button>            
            </td>
            <td>
                <button
                    onClick={() => props.onDelete(props._id)}
                    className="btn btn-danger"
                >
                    delete
                </button>
            </td>            
        </tr>
        </>
    )
};

export default User;