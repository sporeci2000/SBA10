import React from "react";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner"; 

export default function Home() {
    const { data, loading, error } = useFetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    //Show spinner while loading data
    if (loading) return <Spinner />;

    //Show error message if fetch fails
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div>
            <h1>Recipe Categories</h1>
            <ul>
                {data.categories.map((category) => (
                    <li key={category.idCategory}>{category.strCategory}</li>
                ))}
            </ul>
        </div>
    );
}
