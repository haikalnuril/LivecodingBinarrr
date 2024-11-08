import Button from "../Elements/Button";
import { InputForm } from "../Elements/Input";

export const FormLogin = () => {
    return (
        <form action="">
            <div>
            <InputForm label={"email"} name={"email"} placeholder={"Masukkan Email"} type={"email"} />
            <InputForm label={"password"} name={"password"} placeholder={"Masukkan Password"} type={"password"} />
            <Button >Login</Button>
            </div>
        </form>
    );
};
