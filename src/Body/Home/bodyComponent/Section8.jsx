import { useState } from 'react'

const Section8 = () => {
  const [values, setvalue] = useState({ weight: '', height: '' })
  const [calculation, setCalculation] = useState({ bmi: '', fit: '' })

  const handleValueCahange = (value) => {
    return (e) => {
      setvalue({ ...values, [value]: e.target.value })
    }
  }

  const handleCalButtonPress = (e) => {
    e.preventDefault()
    const weight = Number(values.weight)
    const height = Number(values.height) * 0.01
    let bmi
    let fit = ''
    if (weight && height) {
      bmi = (weight / (height * height)).toFixed(1)
      bmi < 18.5
        ? (fit = 'underweight')
        : bmi >= 18.5 && bmi <= 24.9
        ? (fit = 'healthy')
        : bmi > 24.9 && bmi <= 29.9
        ? (fit = 'overweight')
        : (fit = 'obese')

      bmi.toString()
    } else {
      setCalculation({ bmi: 'wrong input', fit: 'wrong input' })
      return
    }
    setCalculation({ bmi, fit })
  }

  return (
    <section className="home-sec8">
      <div className="home-sec8-container">
        <h1>
          <b>
            Let's Calculate Your <span style={{ color: 'red' }}>BMI</span>
          </b>
        </h1>
        <p className="home-sec8-text">
          Easily determine your body mass index with our accurate calculation
          tool.
        </p>
        <form>
          <label htmlFor="weight" />
          <input
            type="text"
            id="weight"
            name="weight/kg"
            placeholder="weight/kg"
            value={values.weight}
            onChange={handleValueCahange('weight')}
          />
          <label htmlFor="height" />
          <input
            type="text"
            id="height"
            name="height/cm"
            placeholder="height/cm"
            value={values.height}
            onChange={handleValueCahange('height')}
          />
          <br />
          <p className="BMI">
            Your BMI is: <span style={{ color: 'red' }}>{calculation.bmi}</span>
          </p>
          <p className="weight">
            Your weight is:{' '}
            <span style={{ color: 'red' }}>{calculation.fit}</span>
          </p>
          <button className="btn-calculate" onClick={handleCalButtonPress}>
            CALCULATE
          </button>
        </form>
      </div>
    </section>
  )
}

export default Section8
