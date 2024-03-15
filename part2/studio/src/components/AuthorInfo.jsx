import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {

  const recipeAuthor = recipedata.map((recipe) => {
    return <div key={recipe.name}>{recipe.author}</div>
  });

  const recipeAuthorImage = recipedata.map((recipe) => {
    return <div>
      <img alt={recipe.name} className="authorImage" src={recipe.authorImage}></img>
    </div>
  });

  const recipeURL = recipedata.map((recipe) => {
    return <div>
      <a key={recipe.name} href={recipe.website}>View Recipe on Website</a>
    </div>
  })

  return  <div>
    {recipeAuthorImage}
    {recipeAuthor}
    {recipeURL}
  </div>
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 