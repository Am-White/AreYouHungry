
import React, { useState } from "react";
import MealList from "../MealList";
import "./style.css";

function Allergy() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(null);

  function getMealData() {
    fetch(
      // `https://api.spoonacular.com/mealplanner/generate?apiKey=47b7932192904cacb6cfbf75808de131&timeFrame=day&`
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
    setCalories(e.target.value);
  }
  

  return (
    <div className="AllergyContainer">
      <div className="AllergySec1">
        <input id="intolerance-Dairy" type="checkbox" name="intolerances" value="Dairy" />
        <label htmlFor="intolerance-Dairy" >Dairy</label><br/>
        <input id="intolerance-Egg" type="checkbox" name="intolerances" value="Egg" />
        <label htmlFor="intolerance-Egg" >Egg</label><br/>
        <input id="intolerance-Gluten" type="checkbox" name="intolerances" value="Gluten" />
        <label htmlFor="intolerance-Gluten" >Gluten</label><br/>
        <input id="intolerance-Grains" type="checkbox" name="intolerances" value="Grains" />
        <label htmlFor="intolerance-Grains" >Grains</label><br/>
        <input id="intolerance-Peanut" type="checkbox" name="intolerances" value="Peanut" />
        <label htmlFor="intolerance-Peanut" >Peanut</label><br/>
        <input id="intolerance-Seafood" type="checkbox" name="intolerances" value="Seafood" />
        <label htmlFor="intolerance-Seafood" >Seafood</label><br/>
      </div>

      <div className="AllergySec2">
        <input id="intolerance-Sesame" type="checkbox" name="intolerances" value="Sesame"/>
        <label htmlFor="intolerance-Sesame">Sesame</label><br/>
        <input id="intolerance-Shellfish" type="checkbox" name="intolerances" value="Shellfish"/>
        <label htmlFor="intolerance-Shellfish">Shellfish</label><br/>
        <input id="intolerance-Soy" type="checkbox" name="intolerances" value="Soy"/>
        <label htmlFor="intolerance-Soy">Soy</label><br/>
        <input id="intolerance-Tree Nut" type="checkbox" name="intolerances" value="Tree Nut"/>
        <label htmlFor="intolerance-Tree Nut">Tree Nut</label><br/>
        <input id="intolerance-Wheat" type="checkbox" name="intolerances" value="Wheat"/>
        <label htmlFor="intolerance-Wheat">Wheat</label><br/>
        <input id="intolerance-Corn" type="checkbox" name="intolerances" value="Corn"/>
        <label htmlFor="intolerance-Corn">Corn</label><br/>
      </div>

      <button onClick={getMealData}>Get Daily Meal Plan</button>
    </div>
  );
}

export default Allergy;