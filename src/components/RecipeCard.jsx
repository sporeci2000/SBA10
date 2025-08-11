//import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
    return (
        <Link
            to={`/recipe/${recipe.idMeal}`}
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
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
            <h3>{recipe.strMeal}</h3>
        </Link>
    );
}
