import React from "react";
import { AuthLayouts } from "../components/Layouts/AuthLayouts";
import { FormLogin } from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

export const LoginPage = () => {
    return (
        <AuthLayouts title={"login"}>
            <FormLogin/>
            <p>Don't Have Accout? <Link to="/register">Register</Link></p>
        </AuthLayouts>
    )
};
