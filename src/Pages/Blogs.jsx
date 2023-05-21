import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Blogs = () => {
    const [direction, setDirection] = useState(false);
    const [indigator, setIndigator] = useState("");
    const handleCollapse = (page) => {
        setDirection(!direction);
        setIndigator(page);
    }
    return (
        <div className="my-14">
            <div className="text-center relative mb-14  ">
                <h2 className="text-3xl md:text-5xl font-bold pb-3">
                    Our Blogs
                </h2>
                <div className="w-28 h-1 bg-[#ff6898d2] absolute -bottom-3 left-1/2 -translate-x-1/2"></div>
            </div>
            <div className="collapse border-b-0 border-2 border-[#ff6899]">
                <input
                    onClick={() => handleCollapse("page_1")}
                    type="checkbox"
                />
                <div className="collapse-title text-2xl font-medium items-center flex justify-between">
                    <h2 className="pr-2">
                        What is an access token and refresh token? How do they
                        work and where should we store them on the client-side?
                    </h2>
                    <span className="text-3xl">
                        {(direction && indigator == "page_1") ? <FaAngleUp /> : <FaAngleDown />}{" "}
                    </span>
                </div>
                <div className="collapse-content">
                    <p>
                        An access token and a refresh token are both commonly
                        used in authentication and authorization mechanisms,
                        particularly in web applications and APIs. The access
                        token is used by the client application (such as a web
                        or mobile app) to authenticate and authorize subsequent
                        requests to protected resources, such as APIs. The token
                        is usually included in the authorization header of HTTP
                        requests as a bearer token. The server then validates
                        the access token to determine if the client has the
                        necessary permissions to access the requested resource.
                        A refresh token is also issued by the authentication
                        server during the initial authentication and
                        authorization process. When the access token expires,
                        the client can use the refresh token to request a new
                        access token without requiring the user to re-enter
                        their credentials. <br />
                        There has 4 ways to store access token and refresh
                        token.
                        <br /> Such as
                        <li>HTTP-Only Cookies</li>
                        <li>Local Storage</li>
                        <li>Session Storage</li>
                        <li>In-Memory Variables</li>
                    </p>
                </div>
            </div>
            <div className="collapse border-b-0 border-2 border-[#ff6899]">
                <input
                    onClick={() => handleCollapse("page_2")}
                    type="checkbox"
                />
                <div className="collapse-title text-2xl font-medium items-center flex justify-between">
                    <h2 className="pr-2">Difference between SQL and NoSQL databases?</h2>
                    <span className="text-3xl">
                        {(direction && indigator == "page_2") ? <FaAngleUp /> : <FaAngleDown />}{" "}
                    </span>
                </div>
                <div className="collapse-content">
                    <p>
                        <span className="text-lg font-bold">SQL: </span> SQL databases use a structured data model, with
                        predefined schemas and relationships between tables.
                        They are suitable for applications with complex
                        relationships, structured data, and transactional
                        requirements. SQL databases offer ACID compliance but
                        may have limited scalability options.<br />
                        <span className="text-lg font-bold">NoSQL: </span> NoSQL databases
                        employ various data models, providing flexibility to
                        handle unstructured, semi-structured, and polymorphic
                        data. They are designed for horizontal scalability,
                        distributing data across multiple servers. NoSQL
                        databases offer schema flexibility, varied query
                        languages, and are commonly used for handling large
                        amounts of unstructured or rapidly changing data.
                    </p>
                </div>
            </div>
            <div className="collapse border-b-0 border-2 border-[#ff6899]">
                <input
                    onClick={() => handleCollapse("page_3")}
                    type="checkbox"
                />
                <div className="collapse-title text-2xl font-medium items-center flex justify-between">
                    <h2 className="pr-2">
                        What is express js? What is Nest JS?
                    </h2>
                    <span className="text-3xl">
                        {(direction && indigator == "page_3") ? <FaAngleUp /> : <FaAngleDown />}{" "}
                    </span>
                </div>
                <div className="collapse-content">
                    <p><span className="text-lg font-bold">Express js: </span> Express.js is a lightweight and flexible web application framework for Node.js. It simplifies the process of handling HTTP requests, routing, middleware implementation, and provides features like template engines, static file serving, and error handling. Express.js is widely used for building web applications and APIs due to its simplicity, flexibility, and large ecosystem of middleware modules.<br/>
                    <span className="text-lg font-bold">Nest js: </span>
                    Nest.js is a TypeScript-based web application framework built on top of Node.js. It provides a modular and scalable architecture, expressive decorators for configuring components, dependency injection for managing dependencies, middleware support, and integrations with various databases. Nest.js is suitable for building complex and scalable server-side applications, offering productivity and maintainability benefits
                    </p>
                </div>
            </div>
            <div className="collapse border-2 border-[#ff6899]">
                <input
                    onClick={() => handleCollapse("page_4")}
                    type="checkbox"
                />
                <div className="collapse-title text-2xl font-medium items-center flex justify-between">
                    <h2 className="pr-2">
                        What is MongoDB aggregate and how does it work?
                    </h2>
                    <span className="text-3xl">
                        {(direction && indigator == "page_4") ? <FaAngleUp /> : <FaAngleDown />}
                    </span>
                </div>
                <div className="collapse-content">
                    <p>MongoDB's aggregate operation is a data processing and analysis tool that allows you to perform complex queries and aggregations on data stored in a MongoDB collection. It works by using a pipeline of stages, where each stage performs a specific operation on the input data and passes the transformed data to the next stage. The stages include matching, projecting, grouping, sorting, limiting, skipping, and unwinding, among others. </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
