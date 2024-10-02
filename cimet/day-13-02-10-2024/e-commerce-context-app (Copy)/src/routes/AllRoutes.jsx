import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeWrapper from "../pages/HomeWrapper";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Blogs from "../pages/Blogs";
import axios from "axios";

const fetchData = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log({ error })
    }
}

const route = createBrowserRouter([
    {
        path: "/",
        element: <HomeWrapper />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetchData("https://fakestoreapi.com/products?limit=4")
            },
            {
                path: "/products",
                element: <Products />,
                loader: () => fetchData("https://fakestoreapi.com/products")
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/blogs",
                element: <Blogs />
            }
        ]
    }
])

const Router = () => {
    return <RouterProvider router={route} />
}

export default Router