import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const [equation, setEquation] = useState(null)

  function handleDigit(digit) {
    if (display === '0') {
      setDisplay(digit)
    } else {
      setDisplay(display + digit)
    }
  }

  function handleOperator(op) {
    setEquation({ value: parseFloat(display), op: op })
    setDisplay('0')
  }

  function handleEquals() {
    if (equation === null) return

    const second = parseFloat(display)
    let result

    if (equation.op === '+') result = equation.value + second
    if (equation.op === '-') result = equation.value - second
    if (equation.op === '*') result = equation.value * second
    if (equation.op === '/') result = equation.value / second

    setDisplay(String(result))
    setEquation(null)
  }

  function handleClear() {
    setDisplay('0')
    setEquation(null)
  }

  return (
    <div className="pg-page">
      <nav className="pg-nav">
        <Link to="/playground" className="pg-back">← Playground</Link>
        <span className="pg-nav-brand">Calculator</span>
      </nav>

      <main className="pg-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '8rem' }}>
        <div className="calc-wrapper">
          <div className="calc-display">{display}</div>
      <div className="calc-grid">
        <button onClick={() => handleDigit('7')}>7</button>
        <button onClick={() => handleDigit('8')}>8</button>
        <button onClick={() => handleDigit('9')}>9</button>
        <button className="btn-operator" onClick={() => handleOperator('/')}>/</button>

        <button onClick={() => handleDigit('4')}>4</button>
        <button onClick={() => handleDigit('5')}>5</button>
        <button onClick={() => handleDigit('6')}>6</button>
        <button className="btn-operator" onClick={() => handleOperator('*')}>*</button>

        <button onClick={() => handleDigit('1')}>1</button>
        <button onClick={() => handleDigit('2')}>2</button>
        <button onClick={() => handleDigit('3')}>3</button>
        <button className="btn-operator" onClick={() => handleOperator('-')}>-</button>

        <button onClick={() => handleDigit('0')}>0</button>
        <button onClick={() => handleDigit('.')}>.</button>
        <button onClick={handleEquals}>=</button>
        <button className="btn-operator" onClick={() => handleOperator('+')}>+</button>

        <button onClick={handleClear}>C</button>
      </div>
    </div>
      </main>
    </div>
  )
}
