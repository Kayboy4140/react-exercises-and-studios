import recipedata from "./recipe.json";

function RecipeImage() {
  const recipeImage = recipedata.map((recipe) => 
    <img className="recipeImage" src={recipe.recipeImage} alt={recipe.name}></img>
  )
   return (
    <div>{recipeImage}</div>
  )
}
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 