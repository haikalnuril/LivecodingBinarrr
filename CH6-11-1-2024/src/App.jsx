import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutView from "./pages/AboutView";
import HomeView from "./pages/HomeView";
import NotFoundView from "./pages/NotFoundView";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import FormatLayout from "./components/Layouts/FormatLayout";
import { loader as HomeLoader } from "./pages/HomeView";

const router = createBrowserRouter([
    {
        path: "/",
        element: <FormatLayout />,
        children: [
            {
                index: true,
                element: <HomeView />,
                loader: HomeLoader,
            },
            {
                path: "about",
                element: <AboutView />,
            },
            {
                path: "not-found",
                element: <NotFoundView />,
            },
        ],
    },
    {},
    {},
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
