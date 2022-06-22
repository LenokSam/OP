import React from 'react'
import { useSelector } from 'react-redux'
import HeatFlow from '../components/determinationOfHeatFlow/HeatFlow'
import Resistance from '../components/determinationOfHeatFlow/Resistance'
import SpeedAndPressure from '../components/determinationOfHeatFlow/SpeedAndPressure'
import LinlForHomePage from '../components/links/LinlForHomePage'

function CalculationPage() {
  const isResistance = useSelector((state) => state?.calculatedValues?.h0AboveThePipe)
  return (
    <div className=' calculationpage column'>
      {/* <LinlForHomePage></LinlForHomePage> */}
      <div className='form'> 
        <HeatFlow></HeatFlow>
        {isResistance>0 && <Resistance></Resistance>}
        {isResistance>0 && <SpeedAndPressure></SpeedAndPressure>}
      </div>
    </div>
  )
}

export default React.memo(CalculationPage)