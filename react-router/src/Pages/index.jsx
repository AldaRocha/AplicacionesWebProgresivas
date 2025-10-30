import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blog, { loaderBlogs } from "./Blog";
import NotFound from "./NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import Post, { loaderPost } from "./Post";

// Creamos el router y su condiguración básica
export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound/>,
        children: [
            {
                path: "/",
                element: <Home/>,
                index: true
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/blog",
                element: <Blog/>,
                loader: loaderBlogs
            },
            {
                path: "/blog/:id",
                element: <Post/>,
                loader: loaderPost
            }
        ]
    }
])