
// import React, { useState } from "react";
// import MealList from "../MealList";

// function Sugar() {
//   const [mealData, setMealData] = useState(null);
//   const [sugars, setSugars] = useState(2000);

//   function getMealData() {
//     fetch(
//       `https://api.spoonacular.com/mealplanner/generate?apiKey=47b7932192904cacb6cfbf75808de131&timeFrame=day&targetSugars=${sugars}`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setMealData(data);
//       })
//       .catch(() => {
//         console.log("error");
//       });
//   }

//   function handleChange(e) {
//     setSugars(e.target.value);
//   }

//   return (
//     <div className="Sugar">
//       <section className="controls">
//         <input
//           type="number"
//           placeholder="Sugars (e.g. 200)"
//           onChange={handleChange}
//         />
//         <button onClick={getMealData}>Get Daily Meal Plan</button>
//       </section>
//       {mealData && <MealList mealData={mealData} />}
//     </div>
//   );
// }

// export default Sugar;