import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Constrtuction from '../../components/construction/Constrtuction';
import ConstructionForm from '../../components/construction/ConstructionForm';
import Alert from '@mui/material/Alert';

import { setH0Above, setH0Under } from '../../redux/calculatedValues/actionCreators';
import { setConstructionDataRequest, setConstuctuionAboveThePipe, setConstuctuionUnderThePipe, setInitialData } from '../../redux/initial/actionsCreators';
import '../page.css';
import './floorconstruction.css'
import { Link } from 'react-router-dom';

function FloorConstruction(props) {
  const { visible } = props;
  const layers = useSelector((state) => state?.initialParametrs?.construction)
  const h0Above = useSelector((state) => state?.calculatedValues?.h0AboveThePipe)
  const h0Under = useSelector((state) => state?.calculatedValues?.h0UnderThePipe)
  const layersAbove= layers.abovePipe
  const layersUnder= layers.underPipe
  const isLayersAboveVisible = layers?.abovePipe?.length > 0
  const isLayersUnderVisible = layers?.underPipe?.length > 0

  const dispatch = useDispatch();
  const h0AboveThePipe = layersAbove.reduce((h, layer )=>{
    return h+=Math.ceil(parseFloat(layer.h0) * 100) / 100
  },0)
  const h0UnderThePipe = layersUnder.reduce((h, layer )=>{
    return h+=Math.ceil(parseFloat(layer.h0) * 100) / 100
  },0)
  const isCheckRetion = Math.round(h0AboveThePipe/ h0UnderThePipe *100)/100
  const recalculate =()=>{
    dispatch(setConstructionDataRequest(true))
  }

  useEffect(() => {
    dispatch(setH0Above(h0AboveThePipe))
    
  }, [h0AboveThePipe, dispatch]);
  useEffect(() => {
    dispatch(setH0Under(h0UnderThePipe))
    
  }, [h0UnderThePipe,dispatch]);
  return (
    <div>
      <div className={visible ? 'form' : 'invisible'}> 
        <div className='initial-form' >
          <legend className='legend-form'>
              Расчет приведенной толщины слоев над и под трубами:
          </legend>
          <div className='row spbtwn input-item'>
            <ConstructionForm setConstruction={setConstuctuionAboveThePipe} text='над'></ConstructionForm>
            <Constrtuction layers={layersAbove} h0={h0Above} visible={isLayersAboveVisible} ></Constrtuction>
          </div>
          <div className='row spbtwn input-item'>
            <ConstructionForm setConstruction={setConstuctuionUnderThePipe} text='под'></ConstructionForm>
            <Constrtuction layers={layersUnder} h0={h0Under} visible={isLayersUnderVisible} ></Constrtuction>
          </div>
        </div>
        <div className={ isCheckRetion>0.1 && isLayersUnderVisible && isLayersAboveVisible ? 'row':'invisible'}>
              <Alert severity="warning">Ввиду ограничений на потери тепла вниз, отношение приведенной толщины слоев сверху (над трубами) к эквивалетной толщине слоев внизу (под трубами) должно быть меньше или равно 0,1. Сейчас оно составляет <span className='titleb0b-20'>{isCheckRetion}</span></Alert>

        </div>

        <button
          type="button"
          className='btn'
          onClick={(event)=> (event.preventDefault())}
        >                    
          <Link to='/calculation' className='linl-btn'>
              Все верно, начать расчет!
          </Link>
        </button> 
        {/* <button
          type="button"
          className='btn m20'
          onClick={()=> recalculate()}
        >
            Изменить данные
        </button>  */}
      </div>
    </div>
  )
}

export default React.memo(FloorConstruction)