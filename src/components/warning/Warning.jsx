import React from 'react'
import {IoIosWarning} from 'react-icons/io';
import './warning.css';
import Alert from '@mui/material/Alert';


function Warning() {
  return (
    <div className=' row'>
        <Alert severity="warning">Рекомендуемая расчетная температура наружного воздуха не ниже -10 °C</Alert>
{/* 
        <IoIosWarning size='30px' color='red'/>
        <span> Рекомендуемая расчетная температура наружного воздуха не ниже -10 °C</span> */}
    </div>
  )
}

export default React.memo(Warning)