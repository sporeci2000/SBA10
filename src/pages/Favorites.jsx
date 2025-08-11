import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import useFetch from "../hooks/useFetch";

export default function Favorites() {
    const { favorites } = useFavorites(); //get array of favorite recipe IDs

    //State to hold full recipe details of favorites
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //Fetch details for each favorite recipe ID
    useEffect(() => {
        if (favorites.length === 0) {
            setRecipes([]);
            return;
        }

        setLoading(true);
        setError(null);

        //Fetch each favorite recipe detail and wait for all to finish
        Promise.all(
            favorites.map((id) =>
                fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                    .then((res) => {
                        if (!res.ok) throw new Error("Failed to fetch");
                        return res.json();
                    })
                    .then((data) => data.meals[0])
            )
        )
            .then((results) => {
                setRecipes(results);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [favorites]);

    if (loading) return <p>Loading your favorite recipes...</p>;
    if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

    if (favorites.length === 0)
        return (
            <p>
                You have no favorite recipes yet. Add some favorites!
            </p>
        );

    return (
        <div>
            <h1>Your Favorite Recipes</h1>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                    gap: "1rem",
                }}
            >
                {recipes.map((recipe) => (
                    <Link
                        to={`/recipe/${recipe.idMeal}`}
                        key={recipe.idMeal}
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
                ))}
            </div>
        </div>
    );
}
