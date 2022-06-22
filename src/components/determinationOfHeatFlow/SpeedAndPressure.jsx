import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getResistanceInterpalation } from '../../modules/calculated/calcHeatFlow/calcResistanse';
import { getPressureInterpalation } from '../../modules/calculated/calculatedPressure';
import { getSpeedInterpalation } from '../../modules/calculated/calculatedSpeed';
import { setResistance } from '../../redux/calculatedValues/actionCreators';

function SpeedAndPressure() {
  const dispatch=useDispatch()
  const {diameter, delta, square, contours} = useSelector((state) => state?.initialParametrs?.conditions)
  const heatFlow = useSelector((state) => state?.calculatedValues?.heatFlow);
  const qContour = square/contours*heatFlow
  const speed = getSpeedInterpalation(diameter, qContour, delta)
  const pressure = getPressureInterpalation(diameter, qContour, delta)
  console.log(speed, square, contours, heatFlow, delta)
  // const next = useCallback(()=>{
  //   dispatch(setResistance(resistance))
  // }, [dispatch, resistance])


  return (
    <div>
      <div className='heatflow calculated-parametr'>
      <p className='titleb0b-30'>
         Скорость теплоносителя
      </p>
      <p className='title227-30'>
        {speed} м/с
      </p>
      </div>
      <div className='heatflow calculated-parametr'>
      <p className='titleb0b-30'>
         Сопротивление потоку
      </p>
      <p className='title227-30'>
        {pressure} Па/м
      </p>
      </div>
 
    </div>
  )
}

export default React.memo(SpeedAndPressure)