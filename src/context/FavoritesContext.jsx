import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

//Create context
const FavoritesContext = createContext();

//Provider component
export function FavoritesProvider({ children }) {

    //Use custom hook to sync favorites with localStorage
    const [favorites, setFavorites] = useLocalStorage("favorites", []);

    //Add recipe ID to favorites if not already added
    function addFavorite(id) {
        if (!favorites.includes(id)) {
            setFavorites([...favorites, id]);
        }
    }

    //Remove recipe ID from favorites
    function removeFavorite(id) {
        setFavorites(favorites.filter((favId) => favId !== id));
    }

    //Check if a recipe ID is in favorites
    function isFavorite(id) {
        return favorites.includes(id);
    }

    return (
        <FavoritesContext.Provider
            value={{ favorites, addFavorite, removeFavorite, isFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

//Custom hook
export function useFavorites() {
    return useContext(FavoritesContext);
}
