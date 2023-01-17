import React from "react";

const BookMark = ({ status, ...rest }) => {
    return (
        <>          
            <i                 
               className={"bi bi-bookmark" + (status ? "-fill" : "")}               
            >                
            </i>
        </>
    )    
};

export default BookMark;