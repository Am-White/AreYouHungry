// import Sugar from "./Sugar/Sugar";
import Calories from "./Calories/Calories";
import Diet from "./Diet/Diet";
import Allergy from "./Allergies/Allergies"
import "./App.css";

function App() {

  return (
    <div className="App">
      {/* <Sugar/> */}
      <Calories className="CalorieContainer"/>
      <Diet className="DietContainer"/>
      <Allergy className="AllergyContainer"/>
      
    </div>
  );
}

export default App;
