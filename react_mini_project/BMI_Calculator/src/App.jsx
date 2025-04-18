
import './App.css'
import React, { useState } from "react";

function App() {

  const [ weight, setWeight ] = useState(0);
  const [ height, setHeight ] = useState(0);
  const [ bmi, setBMI ] = useState('');
  const [ message, setMessage ] = useState('');

  // Logic
  let calcBmi = (e) => {

    e.preventDefault();
    if(weight === 0  || height === 0) {
      alert("Enter Valid weight and height")
    } else {
      let bmi = (weight/(height*height) * 703)
      setBMI(bmi.toFixed());
    }

    if(bmi < 25) {
      setMessage('You are Underweight')
    } else if (bmi >= 25 && bmi < 30) {
      setMessage('You are a Healthy Weight')
    } else {
      setMessage('You are Heavy Weight')
    }
  }  

  // Relaod 
  let reload = () => {
    window.location.reload()
  }


  return (
    <>
      <div className='App'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>

          <div className='weight'>
            <label>Weight (kgs)</label>
            <input type='text' placeholder='Enter Weight value'
             value={weight}
             onChange={(e) => setWeight(e.target.value)}
             />
          </div>

          <div className='weight'>
            <label>Height (in)</label>
            <input type='text' placeholder='Enter Height value'
              value={height}
              onChange={ (event) => setHeight(event.target.value)}
              />
          </div>

          <div>
            <button className='btn' type='Submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'> Reload</button>
          </div>

          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>

        </form>
      </div>

    </>
  )
}

export default App
