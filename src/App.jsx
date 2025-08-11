import React from "react";
import useFetch from "./hooks/useFetch";


export default function App() {
  //Fetch categories from TheMealDB API
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  if (loading) return <p>Loading categories...</p>;
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
