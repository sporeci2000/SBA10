//import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

export default function CategoryPage() {
    const { categoryName } = useParams();

    //Fetch recipes for the selected category
    const { data, loading, error } = useFetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
    );

    //Show spinner while loading
    if (loading) return <Spinner />;

    //Show error message if fetch fails
    if (error) return <ErrorMessage message={error} />;

    return (
        <div>
            <h1>{categoryName} Recipes</h1>

            {/* Grid container for recipe cards */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: "1rem",
                }}
            >
                {/* Map over recipes and render RecipeCard for each */}
                {data.meals.map((meal) => (
                    <RecipeCard key={meal.idMeal} recipe={meal} />
                ))}
            </div>
        </div>
    );
}
