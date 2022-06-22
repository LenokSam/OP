import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getHeatFlowInterpalation } from '../../modules/calculated/calcHeatFlow/calcHeatFlow'
import { setHeatFlow } from '../../redux/calculatedValues/actionCreators';

function HeatFlow() {
  const dispatch=useDispatch()
  const { tfloor, tair, speed} = useSelector((state) => state?.initialParametrs?.conditions);
  const heatFlow = getHeatFlowInterpalation(tfloor, speed, tair)
  const isVisibleBtn = useSelector((state) => state?.calculatedValues?.heatFlow);
  const next = useCallback(()=>{
    dispatch(setHeatFlow(heatFlow))

  }, [dispatch, heatFlow])


  return (
    <div>
      <div className='heatflow calculated-parametr'>
      <p className='titleb0b-30'>
        Поток тепла, передаваемый вверх
      </p>
      <p className='title227-30'>
        {heatFlow} Вт
      </p>
      </div>
 
      <button
        type="button"
        className={isVisibleBtn ? 'invisible' : 'btn m20'}
        onClick={next}
      >
        <Link to='/' className='linl-btn'>
          Далее
        </Link>
      </button> 
    </div>
  )
}

export default React.memo(HeatFlow)