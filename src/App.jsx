import React from "react";
import useFetch from "./useFetch";

export default function App() {
  //Fetch data from API
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  //Show loading message while data is being fetched
  if (loading) return <p>Loading...</p>;

  //Show error if something went wrong
  if (error) return <p>Error: {error}</p>;

  //Show the fetched data
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data && data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
