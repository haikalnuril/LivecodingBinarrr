import Button from "../Elements/Button";
import { InputForm } from "../Elements/Input";

export const FormRegister = () => {
    return (
        <form action="">
            <InputForm label={"fullname"} name={"fullname"} placeholder={"Masukkan Fullname"} type={"text"}/>
            <InputForm label={"email"} name={"email"} placeholder={"Masukkan Email"} type={"email"}/>
            <InputForm label={"password"} name={"password"} placeholder={"Masukkan Password"} type={"password"}/>
            <InputForm label={"confirm password"} name={"confirm-password"} placeholder={"Masukkan Confirm Password"} type={"password"}/>
            <Button>Register</Button>
        </form>
    )
};
