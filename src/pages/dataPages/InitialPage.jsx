import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResistanceInterpalation, getSpeed } from '../../modules/calculated/calculatedSpeed';


import { setInitialData } from '../../redux/initial/actionsCreators';
import '../page.css';

function InitialPage(props) {
  const { visible } = props;
  const [speed, setSpeed] = useState('1');
  const [tmax, setTMax] = useState('60');
  const [tfloor, setTFlow] = useState('1');
  const [tair, setTAir] = useState('-10');
  const [step, setStep] = useState(0.15);
  const [diameter, setDiameter] = useState(14);
  const [square, setSquare] = useState();
  const [contours, setContours] = useState();
  const [supplyLength, setSupplyLength] = useState();
  const [delta, setDelta] = useState(20);
  
  const dispatch = useDispatch();
  const setDataToState = (event) => {
    console.log(+speed, +tfloor, +tair, +tmax, true, step, diameter, square, contours, supplyLength, delta)
    dispatch(setInitialData(+speed, +tfloor, +tair, +tmax, true, +step, +diameter, +square, +contours, +supplyLength, +delta))
  }
  const handleOnClickDelta = (event) => {
    setDelta(event.target.value);
  }
  const handleOnClickSquare = (event) => {
    setSquare(event.target.value);
  }
  const handleOnClickContours = (event) => {
    setContours(event.target.value);
  }
  const handleOnClickSupplyLength = (event) => {
    setSupplyLength(event.target.value);
  }
  const handleOnClickSpeed = (event) => {
      setSpeed(event.target.value);
  }
  const handleOnClickTMax = (event) => {
      setTMax(event.target.value);
  }
  
  const handleOnClickTFlow = (event) => {
      setTFlow(event.target.value);
  }
  
  const handleOnClickTAir = (event) => {
      setTAir(event.target.value);
  }
  const handleOnClickStep = (event) => {
      setStep(event.target.value);
  }
  const handleOnClickDiameter = (event) => {
      setDiameter(event.target.value);
  }
  return (
    <div>
        <div className={visible ? 'invisible' : 'form'}> 
            <div className='initial-form' >
                <legend className='legend-form'>
                    Исходные данные:
                </legend>

                {/* Скорость */}
                <div className="input-item row input-speed" >
                    <span className='input-name'>Скорость ветра:</span>
                    <div className='column text-align' >
                        <label>
                            <input type="radio" defaultChecked name="speed" value={1} onClick={handleOnClickSpeed} />
                                1 м/с для защищенных поверхностей
                            <div className="radio-control"></div>
                        </label>
                        <label>
                            <input type="radio" name="speed" value={3} onClick={handleOnClickSpeed}/>
                                3 м/с для незащищенных поверхностей
                            <div className="radio-control"></div>
                        </label>
                        <label>
                            <input type="radio" name="speed" value={0.5} onClick={handleOnClickSpeed} />
                                0,5 м/с для стадионов и поверхностей с травяным покровом
                            <div className="radio-control"></div>
                        </label>
                    </div>
                </div>

                {/* Максима температура теплоносителя в контуре */}
                <div className="input-item row  input-tmax">
                    <span className='input-name'>Максимальная температура теплоносителя в греющем контуре:</span>
                    <div className='column text-align'>
                        <label>
                            <input type="radio" defaultChecked name="tmax" value="45" onClick={handleOnClickTMax} />
                            + 45°C для поверхности с растительным покровом
                            <div className="radio-control"></div>
                        </label>
                        <label>
                            <input type="radio" name="tmax" value="60" />
                            + 60°C остальные случаи.
                            <div className="radio-control"></div>
                        </label>
                    </div>
                </div>
                {/*Предполагаемая разница подающего и обратного теплоносителей */}
                <div className="input-item row  input-tfloor">
                    <span className='input-name'>Предполагаемая разница подающего и обратного теплоносителей:</span>
                    <div className='column text-align'>
                        <label>
                            <input type="radio"  defaultChecked name="delta" value="20" onClick={handleOnClickDelta}/>
                            20 °C 
                            <div className="radio-control"></div>
                        </label>
                        <label>
                            <input type="radio" name="delta" value="15" onClick={handleOnClickDelta}/>
                            15 °C 
                            <div className="radio-control"></div>
                        </label>
                        <label>
                            <input type="radio" name="delta" value="10" onClick={handleOnClickDelta} />
                            10 °C 
                            <div className="radio-control"></div>
                        </label>
                        <label>
                            <input type="radio" name="delta" value="5" onClick={handleOnClickDelta} />
                            5 °C 
                            <div className="radio-control"></div>
                        </label>
                    </div>
                </div>
                {/* Требуемая температура на поверхности */}
                <div className="input-item row  input-tfloor">
                    <span className='input-name'>Температура на поверхности:</span>
                    <div className='column text-align'>
                        <label>
                            <input type="radio"  defaultChecked name="tfloor" value="1" onClick={handleOnClickTFlow}/>
                            + 1°C 
                            <div className="radio-control"></div>
                        </label>
                        <label>
                            <input type="radio" name="tfloor" value="3" onClick={handleOnClickTFlow}/>
                            + 3°C 
                            <div className="radio-control"></div>
                        </label>
                        <label>
                            <input type="radio" name="tfloor" value="5" onClick={handleOnClickTFlow} />
                            + 5°C 
                            <div className="radio-control"></div>
                        </label>
                    </div>
                </div>
                {/* Предполагаемый шаг укладки */}
                <div className="input-item row  input-tfloor">
                    <span className='input-name'>Предполагаемый шаг укладки:</span>
                    <div className='column text-align'>
                        <label>
                            <input type="radio"  defaultChecked name="step" value="0.1" onClick={handleOnClickStep}/>
                            0.1 м
                            <div className="radio-control"></div>
                        </label>
                        <label>
                            <input type="radio" name="step" value="0.15" onClick={handleOnClickStep}/>
                            0.15 м
                            <div className="radio-control"></div>
                        </label>
                        <label>
                            <input type="radio" name="step" value="0.2" onClick={handleOnClickStep} />
                            0.20 м
                            <div className="radio-control"></div>
                        </label>
                        <label>
                            <input type="radio" name="step" value="0.25" onClick={handleOnClickStep} />
                            0.25 м
                            <div className="radio-control"></div>
                        </label>
                    </div>
                </div>
                {/* Предполагаемый диаметр трубы */}
                <div className="input-item row  input-tfloor">
                    <span className='input-name'>Предполагаемый диаметр трубы:</span>
                    <div className='column text-align'>
                        <label>
                            <input type="radio"  defaultChecked name="diameter" value="18" onClick={handleOnClickDiameter}/>
                            25х3,5 мм
                            <div className="radio-control"></div>
                        </label>
                        <label>
                            <input type="radio"  defaultChecked name="diameter" value="16" onClick={handleOnClickDiameter}/>
                            20х2 мм
                            <div className="radio-control"></div>
                        </label>
                        <label>
                            <input type="radio"  defaultChecked name="diameter" value="14" onClick={handleOnClickDiameter}/>
                            18х2 мм
                            <div className="radio-control"></div>
                        </label>
                    </div>
                </div>

                {/* Минимальная температура наружного вохдуха */}
                <div className="radio input-tfloor text-align input-item">
                    <span className='input-name'>Минимальная температура наружного воздуха:</span>
                    <input type="text" name="tair" defaultValue={-10} placeholder='Не ниже -10 °C' onChange={handleOnClickTAir} />
                    <div className="radio-control"></div>
                </div>
                {/*Общая площадь обгреваемой поверхности */}
                <div className="radio input-tfloor text-align input-item">
                    <span className='input-name'>Общая площадь обгреваемой поверхности, м2 :</span>
                    <input type="text" name="square" value={square} placeholder='' onChange={handleOnClickSquare} />
                    <div className="radio-control"></div>
                </div>
                {/*Предполагаемое количество контуров */}
                <div className="radio input-tfloor text-align input-item">
                    <span className='input-name'>Предполагаемое количество контуров :</span>
                    <input type="text" name="contours" value={contours} placeholder='' onChange={handleOnClickContours} />
                    <div className="radio-control"></div>
                </div>
                {/*Наибольшая протяженность подводящего участка */}
                <div className="radio input-tfloor text-align input-item">
                    <span className='input-name'>Наибольшая протяженность подводящего участка, м:</span>
                    <input type="text" name="supplyLength" value={supplyLength} placeholder='' onChange={handleOnClickSupplyLength} />
                    <div className="radio-control"></div>
                </div>
            </div>

            <button
                type="button"
                className='btn'
                onClick={setDataToState}
            >
                Начать расчет
            </button> 
        </div>

    </div>
  )
}

export default React.memo(InitialPage)