import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import RecipeDetail from "./pages/RecipeDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home page with categories */}
        <Route path="/" element={<Home />} />

        {/* Recipes filtered by category */}
        <Route path="/category/:categoryName" element={<CategoryPage />} />

        {/* Recipe details page */}
        <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}
