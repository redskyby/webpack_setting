import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { AboutLazy } from "./components/pages/about/About.lazy";
import { ShopLazy } from "./components/pages/shop/Shop.lazy";

const root = document.getElementById("root");

if (!root) {
    throw new Error("root not found");
}

const container = createRoot(root);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/about",
                element: (
                    <Suspense fallback={"Loading...."}>
                        <AboutLazy />
                    </Suspense>
                ),
            },
            {
                path: "/shop",
                element: (
                    <Suspense fallback={"Loading...."}>
                        <ShopLazy />{" "}
                    </Suspense>
                ),
            },
        ],
    },
]);

container.render(<RouterProvider router={router} />);
