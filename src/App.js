import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [isHeight, isSetHeight] = useState(true)
  const [isWeight, isSetWeight] = useState(true)
  const [bmi , setBmi] = useState(0)
  const[desc , setDesc] = useState('')

  const ValidateData = (e) => {
    const { name, value } = e.target
    if (!!value.match(/^[0-9]+(\.[0-9][0-9]?)?$/)) {
      if (name === 'height') {
        setHeight(value)
        isSetHeight(true)
      }
      else {
        setWeight(value)
        isSetWeight(true)
      }

    }
    else {
      if (name === 'height') {
        setHeight(value)
        isSetHeight(false)
      }
      else {
        setWeight(value)
        isSetWeight(false)
      }
    }
    

  }
  const Calculate =(e)=>{
    e.preventDefault()
    const bmiValue = (weight/(height * height))*10000
    setBmi(bmiValue)
    if (bmiValue < 18.5) {
      setDesc('Underweight');
    } 
    else if (bmiValue < 24.9) {
      setDesc('Normal Weight');
    } 
    else if (bmiValue < 29.9) {
      setDesc('Overweight');
    } 
    else {
      setDesc('Obese');
    }
  }
  return (
    
      
        <div className='test'>
          <Row className='bg-dark'>
            <Col lg={2}></Col>
            <Col style={{ height: '100vh' }} lg={8} className='d-flex justify-content-center align-items-center flex-column'>
              <div style={{width:'350px',height:'400px'}} className='bg-light'>
                <h1 className='text-center'>BMI Calculator</h1>
                <div className='text-center'>
                  <h3>Your BMI</h3>
                  <h1>{bmi.toFixed(2)}</h1>
                  <p className={desc.replace(" ","-")}>{desc}</p>
                </div>
                <form onSubmit={Calculate} className='text-center'>
                  <div className='mb-3'>
                    <TextField name='height' value={height || ""} onChange={(e) => ValidateData(e)} id="filled-basic" label="Height in cm" variant="filled" />
                    {!isHeight &&
                      
                      <p className='text-danger text-start'>*Invalid input</p>}
                  </div>
                  <div className='mb-3'>
                    <TextField name='weight' value={weight || ""} id="filled-basic" label="Weight in kg" variant="filled" onChange={(e) => ValidateData(e)} />
                    {!isWeight &&
                      <p className='text-danger text-start'>*Invalid input</p>}
                  </div>
                  <Button type='submit' disabled={isHeight && isWeight?false:true} variant="outlined">Calculate</Button>
                </form>
              </div>
  
  
            </Col>
            <Col lg={2}></Col>
          </Row>
        
      
        </div>

  );
}

export default App;
