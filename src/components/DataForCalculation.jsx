import React, { useEffect } from 'react'
import {BiCalculator} from 'react-icons/bi';
import {FaSquarespace, FaRegDotCircle} from 'react-icons/fa';
import {MdOutlineGesture} from 'react-icons/md';
import {AiOutlineHolder} from 'react-icons/ai';
import {BsFillRecordCircleFill} from 'react-icons/bs';
import {GiSpeedBoat} from 'react-icons/gi';
import {RiTempHotLine, RiFootprintFill} from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { setInitialDataRequest } from '../redux/initial/actionsCreators';
import { Link } from 'react-router-dom';
import './dataForCalculation.css'
import Warning from './warning/Warning';
import { getHeatFlowInterpalation } from '../modules/calculated/calcHeatFlow/calcHeatFlow';
import { setHeatFlow } from '../redux/calculatedValues/actionCreators';

function DataForCalculation(props) {
  
  const { receivedInitialData, visible } = props
  const dispatch = useDispatch();
  const { tair, tfloor, tmax, speed, step, diameter, square, contours, supplyLength} = receivedInitialData;
  const recalculate =()=>{
      dispatch(setInitialDataRequest(false))
  }

  return (
    <div className={visible ? 'calculation-parameters form' : 'invisible' }>
        <div className='initial-form' >
            <div className='calculation-parameters__title row'>
                <BiCalculator size='30px'/>
                <span className='title227-30'>
                    Ваши параметры для расчета:
                </span>
            </div>
            <div className='calculation-parameters__inner column'>
                <div className='parameter__item row'>
                    <GiSpeedBoat size='30px'/>
                    <p className='parameter__title'>
                        Скорость ветра:
                    </p>
                    <p className='parameter__count'>
                        {speed} <span> м/с</span>
                    </p>
                </div>
                <div className='parameter__item row'>
                    <RiTempHotLine size='30px'/>
                    <p className='parameter__title'>
                        Требуемая температура на поверхности:
                    </p>
                    <p className='parameter__count'>
                        {tfloor} <span> °C </span>
                    </p>
                </div>
                <div className={tair<-10 ? 'error-notification' :''}>
                  <div className='parameter__item row'>
                      <RiTempHotLine size='30px'/>
                      <p className='parameter__title'>
                          Минимальная температура наружного вохдуха:
                      </p>
                      <p className='parameter__count'>
                          {tair} <span> °C</span>
                      </p>
                  </div>
                      { tair<-10 && <Warning/> }

                </div>
                <div className='parameter__item row'>
                    <RiTempHotLine size='30px'/>
                    <p className='parameter__title'>
                    
                        Максимальная температура теплоносителя в греющем контуре:
                    </p>
                    <p className='parameter__count'>
                        {tmax} <span> °C</span>
                    </p>
                </div>
                <div className='parameter__item row'>
                    <RiFootprintFill size='30px'/>
                    <p className='parameter__title'>
                        Предполагаемый шаг укладки:
                    </p>
                    <p className='parameter__count'>
                        {step} <span> °C</span>
                    </p>
                </div>
                <div className='parameter__item row'>
                    <FaRegDotCircle size='30px'/>
                    <p className='parameter__title'>
                        Предполагаемый диаметр трубы:
                    </p>
                    <p className='parameter__count'>
                        {diameter} <span> мм</span>
                    </p>
                </div>
                <div className='parameter__item row'>
                    <FaSquarespace size='30px'/>
                    <p className='parameter__title'>
                        Общая площадь обгреваемой поверхности:
                    </p>
                    <p className='parameter__count'>
                        { square} <span> м2</span>
                    </p>
                </div>
                <div className='parameter__item row'>
                    <AiOutlineHolder size='30px'/>
                    <p className='parameter__title'>
                        Предполагаемое количество контуров :
                    </p>
                    <p className='parameter__count'>
                        {contours} <span> м2</span>
                    </p>
                </div>
                <div className='parameter__item row'>
                    <MdOutlineGesture size='30px'/>
                    <p className='parameter__title'>
                        Наибольшая протяженность подводящего участка:
                    </p>
                    <p className='parameter__count'>
                        {supplyLength} <span> м</span>
                    </p>
                </div>

            </div>

            <div>
                <button
                  type="button"
                  className='btn'
                  onClick={(event)=> (event.preventDefault())}
                >                    
                  <Link to='/calculation' className='linl-btn'>
                    Все верно, начать расчет!
                  </Link>
                </button> 
                <button
                  type="button"
                  className='btn m20'
                  onClick={()=> recalculate()}
                >
                    Изменить данные
                </button> 
            </div>
        </div>
    </div>
  )
}

export default React.memo(DataForCalculation)