import React, { useEffect, useState } from "react";
import api from "../../../../api";
import SelectField from "../../../common/form/selectField";
const CommentsListComponent = () => {
    const [users, setUsers] = useState([]);
    const [data, setData] = useState({ name: "" });
    useEffect(() => {
        api.users.fetchAll().then((data) => {
            const usersList = data.map((user) => ({
                label: user.name,
                value: user._id
            }));
            setUsers(usersList);
        });
    }, []);
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const handlePublic = () => {
        console.log("Public");
    };
    return (
        <>
            <div className="card mb-2">
                <div className="card-body">
                    <div>
                        <h2>New comment</h2>
                        <SelectField
                            defaultOption="Выберите пользователя"
                            options={users}
                            name="name"
                            onChange={handleChange}
                            value={data.name}
                        />
                        <div className="mb-4">
                            <label
                                htmlFor="exampleFormControlTextarea1"
                                className="form-label"
                            >
                                Сообщение
                            </label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <button
                                type="submit"
                                className="btn btn-primary position-absolute bottom-0 end-0"
                                onClick={handlePublic}
                            >
                                Опубликовать
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommentsListComponent;
