import recipedata from "./recipe.json";

function IngredientList() {

  const ingredientsList = recipedata.map((recipe) => {
    return recipe.ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>;
    })
  })

   return (
    <div>
      <h3>
        <ul>{ingredientsList}</ul>
      </h3>
    </div>
   );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 