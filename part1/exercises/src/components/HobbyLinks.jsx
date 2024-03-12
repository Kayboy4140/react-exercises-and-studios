export default function HobbyLinks() {
    let hobbyLinks = ["https://www.livescore.com/en/", "https://www.facebook.com/koinoniaglobal/"];
   return(
      <div>
         <h3>Hobbies</h3>
         <ol>
            <li><a href = {hobbyLinks[0]}>Livescore</a></li>
            <li><a href = {hobbyLinks[1]}>Koinonia</a></li>
         </ol>
      </div>
      
   );
}