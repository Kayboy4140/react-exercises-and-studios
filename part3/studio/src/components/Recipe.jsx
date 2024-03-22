import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.instagram.com/kayynation/?next=%2F";
   let authorPhoto = "https://lh3.googleusercontent.com/pw/AP1GczM0riFwDmocGqBc-hmSxzlXuzBDwgtWFGPZDN226X26Wf2VfP0VHyDGEVbynsu7IWIc4M_12gmeKe2Q8pl4mA0Lr_iGV30t9hmML0tCF7ApGGOoEx7NUsUkLe7JmM-pFnhayQkRBabeM4Adk4NmQPq-eyNbLTUAXVkVhCcRMtHw9p7DIoIQnh8f8iwIhFIZNFLP4BSvVSLSE7t138Ic-mzVq78Ne7vg2XBBk0moKViz9h1mGS-8BvU5w4geFVfFNrdvQaGvHt_MlXXcgYagc6oXBVtV2ICE3VOvEsXo-C-vDAHXovuB5xez5hSp5zL-Ko85BBnCffk4IGv8jD1CnfyFx6BmBgZfeddHYXwcP0BYqwadoM6YcC3NLYGfZY54JICDrmHdDyyp1tP04LLOaKcrcuX_fgHwflA9FbmpCs-jKAauFzEtV5hkeIQUhJVUvGs4lBFGZdCJmfXT1LT43dj4Ptmw-wU-kyC_GjZyF24dme-kabDKDCBddnufdvrJyRox6z5S9fBFTYAPcN65t4qDdSEANlld1m7Id2iOUDbfu9ut1xREdVkMn87LwpduCvkly39o8IgLOrRaMhfB7NaefPLYjJDVfmoMVDrhEvDUabFMeVdpyr2VqlZbzzyJ1Dlticj1sqK2egApg3c1ulMi1B6CZEcoJPX2P9BtmLit0k4d3vRICNpatl8Fc29i3HNIENyiZKNa7RY7Ue4l89J9oTTImrxLiU85MIakw3e4T0pAq3zUZOBiWHcjocfj0l6queoIoxegxUEhYv6V7gFIsMnGCcMUaTNSF75lYIqwyBzfD7Pz2AGtp68IcWNeg6isFRWH4aQTm6UiHMnLfs_CaHr5efprdXfgTa2w9vwGCm3y3BDvenP3G0XPGnEIAq06koiVpCMf-3jGEyDwuOH7=w593-h890-s-no-gm?authuser=1";
   let authorName = "Kayode Oluwasegun";

   return (
      <div>
         <img src={authorPhoto} alt = "Kay's Photo" style={{objectFit: "contain", borderRadius: "50%"}} height="300px" />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>Kay's Blog</a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Rice", "Tomato Paste", "Bell Pepper", "Onions", "Seasonings"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Nigerian Jollof Rice</h1>
            <p>There are hundreds of different dishes in the world, but there is only a handful that has enough flavor for me to eat alone. 
                    A bowl of Jollof rice is one of those dishes. You know, the kind where you can taste the spoon or fork after you’re done with the food? 
                    I mean, you’d want to lick it clean. Jollof is deliciously addictive.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://cheflolaskitchen.com/wp-content/uploads/2018/10/Jollof-Rice-17.jpg.webp" alt="Recipe Photo" className="imageUpdates" height="450px"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
