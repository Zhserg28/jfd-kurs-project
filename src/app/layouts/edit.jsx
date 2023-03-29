import React from "react";
import { useParams } from "react-router-dom";
import EditForm from "../components/ui/editForm";

const Edit = () => {
    const params = useParams();
    const { userId } = params;
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <EditForm userId={userId} />
                </div>
            </div>
        </div>
    );
};

export default Edit;
