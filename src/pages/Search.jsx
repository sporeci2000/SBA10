import React from "react";
import { useLocation, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function SearchResults() {
    //Get search params from URL
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const query = queryParams.get("query");

    //Fetch recipes by name using TheMealDB API
    const { data, loading, error } = useFetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query || ""}`
    );

    if (!query) return <p>Please enter a search term.</p>;
    if (loading) return <p>Searching for "{query}"...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    if (!data || !data.meals) return <p>No recipes found for "{query}".</p>;

    return (
        <div>
            <h1>Search Results for "{query}"</h1>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: "1rem",
                }}
            >
                {data.meals.map((meal) => (
                    <Link
                        to={`/recipe/${meal.idMeal}`}
                        key={meal.idMeal}
                        style={{
                            display: "block",
                            padding: "1rem",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            background: "#fff",
                            textAlign: "center",
                            textDecoration: "none",
                            color: "black",
                        }}
                    >
                        <img
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            style={{ maxWidth: "100%", borderRadius: "8px" }}
                        />
                        <h3>{meal.strMeal}</h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}
