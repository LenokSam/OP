import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Constrtuction from '../../components/construction/Constrtuction';
import { result } from '../../modules/calculated/calcHeatFlow/calcHeatFlow';
import { setH0Above } from '../../redux/calculatedValues/actionCreators';
import { setConstuctuionAboveThePipe, setInitialData } from '../../redux/initial/actionsCreators';

function ConstructionForm(props) {
    const { visible, setConstruction, text } = props;
    const [count, setCount] = useState(1);
    const [thickness, setThickness] = useState();
    const [transcalency, setTranscalency] = useState();
    const [name, setName] = useState();
    const dispatch = useDispatch();

    const handleOnClickThickness= (event) => {
        setThickness(event.target.value);
      }
    const handleOnClickTranscalency= (event) => {
      setTranscalency(event.target.value);
    }
    const handleOnClickName= (event) => {
      setName(event.target.value);
    }
    
    const setConstructionToState = (event) =>{
      event.preventDefault()
      dispatch(setConstruction(count, thickness, transcalency,name))
      setThickness('');
      setTranscalency('');
      setName('');
    }
  return (
    <div>
        
      <div className="radio input-tfloor text-align ">
      <h1 className='titleb0b-20'> Толщина {text} трубой: </h1>
        <p className='input-name'>Толщина слоя:</p>
        <input type="number" name="thickness" value={thickness} placeholder='' onChange={handleOnClickThickness} />
        <p className='input-name'>К-т теплопроводности:</p>
        <input type="number" name="transcalency" value={transcalency} placeholder='' onChange={handleOnClickTranscalency} />
        <p className='input-name'>Материал слоя:</p>
        <input type="text" name="transcalency" value={name} placeholder='' onChange={handleOnClickName} />
        <div className="radio-control"></div>
        <button
            type="button"
            className='btn btn-construction'
            onClick={setConstructionToState}
        >
            Добаваить слой
        </button> 
      </div>

      </div>

  )
}

export default React.memo(ConstructionForm)