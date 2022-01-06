
import React, { useState } from "react"
import MealList from "./MealList"

function App() {
  const [mealData, setMealData] = useState(null)
  const [calories, setCalories] = useState(2000)

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=47b7932192904cacb6cfbf75808de131&timeFrame=day&targetCalories=${calories}`
    )
      .then(response => response.json())
      .then(data => {
        setMealData(data)
      })
      .catch(() => {
        console.log("error")
      })
  }

  function handleChangeCalories(e) {
    setCalories(e.target.value)
  }

  return (
    <>
    <div className="App">
      <section className="controls">
      <h3> Daily Calories: </h3>
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChangeCalories}
        />

        <h3> Diet Prefrence:  </h3>
          <checkbox> Vegan </checkbox>
          <checkbox> Vegetarian </checkbox>
          <checkbox> Gluten Free </checkbox>

        <br/>
        <h3> Serving Size: </h3>
                <input
          type="number"
          placeholder="Serving size"
        />

        <br/>
        <button onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      
      {mealData && <MealList mealData={mealData} />}
    </div>

    </>
  )
}

export default App