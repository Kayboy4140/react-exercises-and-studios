import React from "react";
import styles from './Description.module.css';

function RecipeAuthor() {
    let authorLink = "https://www.instagram.com/kayynation/?next=%2F";
    let authorPhoto = "https://lh3.googleusercontent.com/pw/AP1GczOJZj6VQlJN1hyiwVSBH6BZBGDrdHLFeCbpNB8ii93VXa-grR2QDnGY4XcQU9kXYcU9iMU4eLK0-8VAH0szsuDnzjU3l644FApwAHet1yLJf8CmhueCxKQTVJSLDMME34iWuBt85rsrLjPHv9OqwJIdrBO75Nzpqt6rNcwFTB_LHE0eAXv9Eff80pYZdF3lnvSF0sSkiaSsi1fAGMItI8AG4UCgnrIrPaZQQuFDiedjowJ5nfCyjZzt8UsGzpfhkiIFvnPx8RMrv6cHmisJ_g8gdFmPmFag0kvY74wL-AWn6teQTfphOo3R2Zm6j5almuXKLIAYT6qU-P9uPU9PVETRugaa0fNKwWJjZl65OtONw4N3g3R3GnCzey3L5Nltca1nj4IKHVhU6o677SyiFLAtID3DApKIy2X6TPnox6Lg74xNkqdB3EsvYUpH-bSmZ3qXwGw2hAVsDtRlU2fZ4LqSKiCzeKpiNserza1xM7LaFJSUefHoO0Bvmatf2y8erD5Kmix1sjz5ZsMmZnWRXD9BV1Hcg_51prFaqgsLEq_zDsJ4BvOUfGrU_q7md66haQ-Zw2_5eyGUEzYjd5MEGIVWfSkU8adsvBPlAje-BaOJj0QfC39Q0bTobp4WHer0H_PiEoe122LpF3BdqNUqObxVg3VK7QHrLMKnloQCIt0sjif0QE-2y3YyavtEsbkyGOSMF18E4fya_J-DPnBsQ56wtzhcAEguaGhcqtytTjwrMIlBK-0b_P0744_liJZRlgyJUPtpFtnSMY-W0kacSNHIdHY7-s8OOXph3fOb5i7fWD5ejy-cwAM7UQ_KBR8wzawAOWu6f8Dpti0p89xykfgM6VII_6wXasea6SedS2m7mOQn4ZTEcqqhvyOF9IMq3JA5MPYGlkepJLGZNoWCiQfXTw=w593-h890-s-no-gm?authuser=1";
    let authorName = "Kayode Oluwasegun";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} width={300} height={300} alt = "My Photo" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Kay's Blog</a> 
           </div>
        </div>
     );
};

class RecipeDescription extends React.Component {
    render() {
       return (
        <div> 
            <div>
                <h1>Nigerian Jollof Rice Recipe</h1>
                <p>There are hundreds of different dishes in the world, but there is only a handful that has enough flavor for me to eat alone. 
                    A bowl of Jollof rice is one of those dishes. You know, the kind where you can taste the spoon or fork after you’re done with the food? 
                    I mean, you’d want to lick it clean. Jollof is deliciously addictive.</p>
            </div>
            <RecipeAuthor />
        </div>
       );
    }
};

export default RecipeDescription;