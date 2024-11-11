import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Filter from "../components/Filter";

export const loader = async ({ request }) => {
    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
    ]);
    const token = localStorage.getItem("token")

    const { data } = await axios.get("http://localhost:3000/api/v1/shops", { params: params, headers: { Authorization: `Bearer ${token}` } });
    const shops = data.data.shops;
    console.log(shops);
    

    return { shops, params };
};

const HomeView = () => {
    const { shops } = useLoaderData();
    const [error, setError] = useState("");


    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Shops</h1>
            <Filter />
            {error ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                    <p>{error}</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {shops.length === 0 ? (
                        <p className="text-center">No shops available</p>
                    ) : (shops.map((shop) => (
                        <div
                            key={shop.name}
                            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        >
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {shop.name}
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Admin Email: {shop.adminEmail || "N/A"}
                                </p>
                                <div>
                                    {shop.products.map((product, index) => (
                                        <div key={index} className="mb-2">
                                            <div className="flex justify-center">
                                                {product.images.map((image, imageIndex) => (
                                                    <img
                                                        key={imageIndex}
                                                        src={image}
                                                        alt={`Product ${index} Image ${imageIndex}`}
                                                        className=" object-cover mx-1"
                                                    />
                                                ))}
                                            </div>
                                            <h3 className="text-lg font-medium mb-1">
                                                {product.name}
                                            </h3>
                                            <p className="text-gray-600 mb-1">
                                                Stock: {product.stock}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-gray-600 mt-2">
                                    User: {shop.user.name}
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-sm font-medium text-center btn btn-primary mt-4"
                                >
                                    Read more
                                    <svg
                                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    )))}
                </div>
            )}
        </div>
    );
};

export default HomeView;