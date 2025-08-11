import React from "react";
import { useParams, Link } from "react-router-dom"; //useParams to read URL info
import useFetch from "../hooks/useFetch";

export default function CategoryPage() {
    //Get the category name from the URL
    const { categoryName } = useParams();

    //Use custom hook to fetch recipes for that category
    const { data, loading, error } = useFetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    );

    //If still loading, show a simple loading message
    if (loading) return <p>Please wait. Loading recipes...</p>;

    //Error message
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div>
            {/* Page title */}
            <h1>{categoryName} Recipes</h1>

            {/* Recipes grid */}
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
                        }}
                    >
                        {/* Recipe image */}
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
