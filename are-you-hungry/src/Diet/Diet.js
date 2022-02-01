
import React, { useState } from "react";
import MealList from "../MealList";
import "./style.css";

function Diet() {
  const [mealData, setMealData] = useState(null);
  const [diet, setDiet] = useState(null);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=47b7932192904cacb6cfbf75808de131&timeFrame=day&Diet=${diet}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setDiet(e.target.value);

    //Set checked to true
  }

  return (
    <div className="DietContainer">
      <section className="controls">
        <input  id="no-Diet Diet" type="radio" name="diet" value="No Diet" />
        <label htmlFor="no-Diet Diet"> No Diet </label>
          <br/>
        <input  id="no-Vegetarian" type="radio" name="diet" value="Vegetarian" onClick={handleChange}/>
        <label htmlFor="no-Vegetarian"> Vegetarian </label>
          <br/>
        <input  id="no-Vegan" type="radio" name="diet" value="Vegan"/>
        <label htmlFor="no-Vegan"> Vegan </label>
          <br/>
        <input  id="no-Pescetarian" type="radio" name="diet" value="Pescetarian"/>
        <label htmlFor="no-Pescetarian"> Pescetarian </label>
          <br/>
        <input  id="no-Ketogenic" type="radio" name="diet" value="Ketogenic"/>
        <label htmlFor="no-Ketogenic"> Ketogenic </label>
          <br/>
        <button onClick={getMealData}>Get Daily Meal Plan</button>
      </section>

      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default Diet;