import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
    const { blogs } = useLoaderData();
    console.log(blogs);

    return(
        <ul>
            {
                blogs.length > 0 ? (
                    blogs.map((b) => (
                        <li key={ b.id }>
                            <Link to={ `/blog/${b.id}` }>
                                {
                                    b.title
                                }
                            </Link>
                        </li>
                    ))
                ) : (
                    <li>
                        No blog found
                    </li>
                )
            }
        </ul>
    );
}

export default Blog;

export const loaderBlogs = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const blogs = await data.json();
    return { blogs };
}