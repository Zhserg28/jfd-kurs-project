import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../api";
import MultiSelectField from "../common/form/multiSelectField";
import RadioField from "../common/form/radioField";
import SelectField from "../common/form/selectField";
import TextField from "../common/form/textField";
import { useHistory } from "react-router-dom";

const EditForm = ({ userId }) => {
    const [user, setUser] = useState();
    const [data, setData] = useState({});
    const [qualities, setQualities] = useState({});
    const [professions, setProfession] = useState([]);

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
        api.professions.fetchAll().then((data) => setProfession(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

    useEffect(() => {
        api.users.update(userId, user).then((data) => setUser(data));
    }, [data]);

    const getChangeQualities = (qualForm) => {
        const arrayQual = Object.values(qualities);
        const arrayQualChanged = [];
        qualForm.forEach((element) => {
            arrayQual.forEach((quality) => {
                if (quality._id === element.value) {
                    arrayQualChanged.push(quality);
                }
            });
        });
        return arrayQualChanged;
    };

    const handleChange = (target) => {
        setUser((prevState) => ({
            ...prevState,
            [target.name]:
                target.name === "qualities"
                    ? getChangeQualities(target.value)
                    : target.value
        }));
    };
    const handleChangeProfession = (target) => {
        setUser((prevState) => ({
            ...prevState,
            [target.name]: Object.values(professions).find((item) => {
                return item._id === target.value;
            })
        }));
    };
    const history = useHistory();
    const handleUpdate = () => {
        setData(user);
        if (user) {
            history.goBack();
        } else {
            return <h1>Loading</h1>;
        }
    };

    if (user) {
        return (
            <form>
                <TextField
                    label="Имя"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                />
                <TextField
                    label="Электронная почта"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                />
                <SelectField
                    label="Выберите вашу профессию"
                    defaultOption="Choose..."
                    name="profession"
                    options={professions}
                    onChange={handleChangeProfession}
                    value={user.profession._id}
                />
                <RadioField
                    options={[
                        { name: "Male", value: "male" },
                        { name: "Female", value: "female" }
                    ]}
                    value={user.sex}
                    name="sex"
                    onChange={handleChange}
                    label="Выберите ваш пол"
                />
                <MultiSelectField
                    options={qualities}
                    onChange={handleChange}
                    defaultValue={Object.keys(user.qualities).map(
                        (optionName) => ({
                            label: user.qualities[optionName].name,
                            value: user.qualities[optionName]._id
                        })
                    )}
                    name="qualities"
                    label="Выберите ваши качества"
                />
                <button
                    className="btn btn-primary w-100 mx-auto"
                    type="button"
                    onClick={handleUpdate}
                >
                    Обновить
                </button>
            </form>
        );
    } else {
        return <h1>Loading</h1>;
    }
};
EditForm.propTypes = {
    userId: PropTypes.string
};

export default EditForm;
