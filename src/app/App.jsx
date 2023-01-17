import React ,{ useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

function App () {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    const handleToggBookMark = (id) => {
        const newUsers = users.map((user) => {
            if (user._id === id) {
                return {...user, bookmark: !user.bookmark};
            }
            return user;
        });        
        setUsers(newUsers);
    };
    return (
        <div>
            <SearchStatus lenth = {users.length}/>
            <Users 
                users={users}
                onDelete={handleDelete}
                onToggBookMark={handleToggBookMark}
            />
        </div>
    );
}

export default App;