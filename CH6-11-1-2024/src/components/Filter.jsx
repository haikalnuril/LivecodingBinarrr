import React from "react";
import { Form, Link } from "react-router-dom";
import FormInput from "./Form/FormInput";
import { useLoaderData } from "react-router-dom";

const Filter = () => {
    const { params } = useLoaderData();
    const { shopName, productName, stock } = params;
    return (
        <Form
            method="get"
            className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-3 grid-cols-3 mb-5 items-center"
        >
            <FormInput
                label="Shop Name"
                name="shopName"
                type="text"
                defaultValue={shopName}
            />
            <FormInput
                label="Product Name"
                name="productName"
                type="text"
                defaultValue={productName}
            />
            <FormInput label="Stock" name="stock" type="number" defaultValue={stock} />

            <Link to="/" className="btn btn-accent">
                RESET
            </Link>
            <button type="submit" className="btn btn-primary">
                SEARCH
            </button>
        </Form>
    );
};

export default Filter;
