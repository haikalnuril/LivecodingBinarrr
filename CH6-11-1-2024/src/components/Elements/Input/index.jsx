import React from "react";
import { Label } from "./Label";

export const InputForm = ({ label, name, type, placeholder }) => {
    return (
        <>
            <Label htmlFor={name}>{label}</Label>
            <input type={type} placeholder={placeholder} id={name} name={name} />
        </>
    );
};
