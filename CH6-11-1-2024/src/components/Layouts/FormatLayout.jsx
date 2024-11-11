import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../navbar/Nav";

const FormatLayout = () => {
    return (
        <>
            <Nav />
            <main className="mx-auto max-w-6xl px-8 py-20 min-h-[80vh]">
                <Outlet />
            </main>
        </>
    );
};

export default FormatLayout;
