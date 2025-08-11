import React from "react";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

export default function Home() {
    const { data, loading, error } = useFetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    //Show spinner while loading data
    if (loading) return <Spinner />;

    //Show error message if fetch fails
    if (error) return <ErrorMessage message={error} />;

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
