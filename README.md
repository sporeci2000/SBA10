In my app, I set up the main structure using React Router. I included a Navbar that shows on every page to help users navigate and search recipes easily. I created routes for different pages like Home, Category, Recipe Detail, Favorites, and Search Results. This makes the app load pages smoothly without refreshing the whole browser, giving a better experience.

To make fetching data easier, I created a custom hook called useFetch. This hook takes a URL, fetches data from it, and keeps track of loading and error states. This way, my components don’t need to write the same fetch code again and again; they just use the hook to get data and show loading or error messages automatically.

The Home page uses useFetch to get recipe categories from TheMealDB API. While the data is loading, a spinner shows to let the user know. If there’s an error, a friendly message appears. Once loaded, it shows a list of recipe categories.

The CategoryPage uses the URL to get a category name, then fetches recipes from that category. It also shows a spinner while loading, error messages if something goes wrong, and finally displays the recipes in a nice grid layout.

The Favorites component gets favorite recipe IDs from a global context and fetches full details for each. It shows loading and error messages as needed. If there are no favorites yet, it encourages users to add some.

RecipeDetail shows detailed info about a selected recipe, including its name, image, ingredients, and instructions. It uses the favorites context to let users add or remove the recipe from favorites with a button that updates right away to reflect the change.

SearchResults takes the search term from the URL and fetches recipes that match it. It handles loading, errors, and the case when no results are found. Found recipes are shown in a grid with images and names, each linking to the detail page.

The Navbar contains links to Home and Favorites, plus a search bar so users can type recipe names. I created a RecipeCard component to display each recipe in a clean, clickable card. Spinner and ErrorMessage components show loading and error states in a consistent way across the app.

To keep data saved even after refreshing the page, I made a useLocalStorage hook. It reads and writes data to the browser’s localStorage. The FavoritesContext uses this hook to store favorite recipe IDs and functions to add or remove favorites. The FavoritesProvider wraps the app and shares this data with all components, while the useFavorites hook makes it easy to use favorites anywhere.

The hardest part of this project was the favorites feature. It was challenging because it needed to keep the list of favorite recipes saved even when the user refreshed or closed the browser, which meant using localStorage correctly. I had to make sure that whenever a user added or removed a favorite, the app updated the UI immediately so it felt smooth and responsive. Managing this state globally with React Context took some time to understand. Also, fetching the full details of all favorite recipes, based on just their IDs, required handling multiple API requests at once and showing loading or error messages properly. Getting all of these pieces to work together and keeping the code clean was the most difficult part of my app.

RESOURCES:
https://www.w3schools.com/react/react_router.asp   
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises   
https://legacy.reactjs.org/docs/hooks-state.html   
https://legacy.reactjs.org/docs/context.html   
https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams   
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage   

