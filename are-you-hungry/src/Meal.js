import React, { useState, useEffect } from "react"

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=47b7932192904cacb6cfbf75808de131&includeNutrition=false`
    )
      .then(response => response.json())
      .then(data => {
        setImageUrl(data.image)
      })
      .catch(() => {
        console.log("error")
      })
  }, [meal.id])

  return (
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
        <li>Diet Type: {meal.diets}</li>
        <li>Gluten Free: {meal.glutenFree}</li>
      </ul>

      <a href={meal.sourceUrl}>Go to Recipe</a>
    </article>
  )
}