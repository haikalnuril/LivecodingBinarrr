import React from "react";
import { AuthLayouts } from "../components/Layouts/AuthLayouts";
import { FormRegister } from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
    return (
        <AuthLayouts title={"register"}>
            <FormRegister/>
            <p>Already Have Account? <Link to="/login">Login</Link></p>
        </AuthLayouts>
    )
};
