import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useFavorites } from "../context/FavoritesContext";

export default function RecipeDetail() {
    const { recipeId } = useParams();

    //Fetch full details for one recipe by ID
    const { data, loading, error } = useFetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
    );

    if (loading) return <p>Loading recipe details...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    if (!data || !data.meals || data.meals.length === 0) {
        return <p>Recipe not found! Try again.</p>;
    }

    const recipe = data.meals[0];


    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== "") {
            ingredients.push(`${measure} ${ingredient}`.trim());
        }
    }

    //Check if this recipe is already in favorites
    const favorite = isFavorite(recipeId);

    //Toggle favorite state on button click
    function handleFavoriteClick() {
        if (favorite) {
            removeFavorite(recipeId);
        } else {
            addFavorite(recipeId);
        }
    }

    return (
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h1>{recipe.strMeal}</h1>
            <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                style={{ width: "100%", borderRadius: "8px" }}
            />

            {/* Favorite toggle button */}
            <button
                onClick={handleFavoriteClick}
                style={{
                    margin: "1rem 0",
                    padding: "0.5rem 1rem",
                    backgroundColor: favorite ? "#ff6666" : "#66cc66",
                    border: "none",
                    borderRadius: "5px",
                    color: "white",
                    cursor: "pointer",
                }}
            >
                {favorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>

            <h2>Ingredients</h2>
            <ul>
                {ingredients.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>

            <h2>Instructions</h2>
            <p style={{ whiteSpace: "pre-line" }}>{recipe.strInstructions}</p>
        </div>
    );
}