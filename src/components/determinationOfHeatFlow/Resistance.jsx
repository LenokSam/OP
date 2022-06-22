import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getResistanceInterpalation } from '../../modules/calculated/calcHeatFlow/calcResistanse';
import { getReturnTemperatureWithInterpalation } from '../../modules/calculated/calcHeatFlow/calcReturnTemperature';
import { setResistance } from '../../redux/calculatedValues/actionCreators';
import { round10 } from '../../modules/round10'

function Resistance() {
  const dispatch=useDispatch()
  const h0 = useSelector((state) => state?.calculatedValues?.h0AboveThePipe);
  const heatFlow = useSelector((state) => state?.calculatedValues?.heatFlow);
  const {tfloor, step, diameter, square, contours, supplyLength} = useSelector((state) => state?.initialParametrs?.conditions)
  const resistance = getResistanceInterpalation(diameter, h0, step)
  console.log(tfloor, resistance, heatFlow)

  const returnTemperature = getReturnTemperatureWithInterpalation(tfloor, resistance, heatFlow)
  console.log(returnTemperature)
  const realTemperature = round10(heatFlow*resistance + returnTemperature)
  const squareOne = round10(square/contours)
  const heatFlowContour= round10(squareOne*heatFlow*1.1)
  const lengthContour= round10(squareOne/step )
  const mostLengthContour= lengthContour + supplyLength*2


  const next = useCallback(()=>{
    dispatch(setResistance(resistance))
    console.log(returnTemperature)
  }, [dispatch, resistance,])


  return (
    <div>
      <div className='heatflow calculated-parametr'>
        <p className='titleb0b-30'>
          Термическое сопротивление
        </p>
        <p className='title227-30'>
          {resistance} Вт/м2К 
        </p>
      </div>
      <div className='heatflow calculated-parametr'>
        <p className='titleb0b-30'>
          Расчетная температура обратного теплоносителя: 
        </p>
        <p className='title227-30'>
          {returnTemperature} °C
        </p>
      </div>
      <div className='heatflow calculated-parametr'>
        <p className='titleb0b-30'>
          Реальная температура воды: 
        </p>
        <p className='title227-30'>
          {realTemperature} °C
        </p>
      </div>
      <div className='heatflow calculated-parametr'>
        <p className='titleb0b-30'>
          Площадь одного контура: 
        </p>
        <p className='title227-30'>
          {squareOne} м
        </p>
      </div>
      <div className='heatflow calculated-parametr'>
        <p className='titleb0b-30'>
          Требуемая мощность греющего контура: 
        </p>
        <p className='title227-30'>
          {heatFlowContour} Вт
        </p>
      </div>
      <div className='heatflow calculated-parametr'>
        <p className='titleb0b-30'>
          Длина контура 
        </p>
        <p className='title227-30'>
          {lengthContour} м
        </p>
        <p className='titleb0b-30'>
          При шаге укладки 
        </p>
        <p className='title227-30'>
          {step} м
        </p>
      </div>
      <div className='heatflow calculated-parametr'>
        <p className='titleb0b-30'>
          Длина контура с учетом подводящих участков
        </p>
        <p className='title227-30'>
          {mostLengthContour} м
        </p>
      </div>
 
      <button
        type="button"
        className='btn m20'
        onClick={next}
      >
        {/* <Link to='/construction' className='linl-btn'> */}
          Далее
        {/* </Link> */}
      </button> 
    </div>
  )
}

export default React.memo(Resistance)