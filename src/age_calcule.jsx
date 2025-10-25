import React, {  useState  } from "react";
import "./age_calcule.css";

function CalculeAge() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState("");
  const [city,setity]= useState("");
  const handleClick = (event) => {
    event.preventDefault();
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    let calculatedAge = currentYear - year;
    let dayDiff = currentDay - day;
    let monthDiff = currentMonth - month;


    if(gender === "male"){
      setGender("man");
    }else{
      setGender("woman");
    }
    
    




    setAge(calculatedAge);
    setDay(dayDiff);
    setMonth(monthDiff);  
  };

  return (
    <div className="AGE_CALULE">
      <h1>Calcule Age</h1>
      <p>Donner votre année de naissance</p>

      <form>
        <label>YEAR OF BIRTH</label>
        <input
          type="number"
          className="input_age"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <br />

        <label>DAY OF BIRTH</label>
        <input
          type="number"
          className="input_DAY"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        <br />

        <label>MONTH OF BIRTH</label>
        <input
          type="number"
          className="input_MOUNTH"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
        <label>homme</label>
        <input type="radio" name="gender" value="male" onChange={(e)=> setGender(e.target.value)}/>
        <label>femme</label>
        <input type="radio" name="gender" value="female" onChange={(e)=> setGender(e.target.value)} />
        <br />
        <select name="city" onChange={(e)=> setity(e.target.value)}>
          <option value="">--Choose an option--</option>
          <option value="sale">Sale</option>
          <option value="Tamara">Tamara</option>
          <option value="Tiznit">Tiznit</option>
        </select>
        <button onClick={handleClick}>Calculer</button>
      </form>

      <div className="resultat_age">
        {age !== null && <p>your age is {age} years
        and you lived  {month} mounths and {day} and you are  {gender} and you live in  {city}
          </p>}
      </div>
    </div>
  );
}

export default CalculeAge;
