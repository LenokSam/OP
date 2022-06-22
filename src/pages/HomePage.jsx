import React from 'react'
import { useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import DataForCalculation from '../components/DataForCalculation'
import LinlForHomePage from '../components/links/LinlForHomePage'
import FloorConstruction from './dataPages/FloorConstruction'
import InitialPage from './dataPages/InitialPage'

function HomePage() {
    const initialData = useSelector((state) => state?.initialParametrs)
    const calculateData = useSelector((state) => state?.calculatedValues)
    const isVisibleInitial = initialData?.isCalculateStarted;
    const isVisibleConstruction = calculateData?.heatFlow
  return (
    <div className='homepage'>
        <InitialPage visible={isVisibleInitial} ></InitialPage>
        <DataForCalculation
            receivedInitialData={initialData.conditions}
            visible={isVisibleInitial && !isVisibleConstruction}
        ></DataForCalculation>
        <FloorConstruction visible={isVisibleConstruction} ></FloorConstruction>
    </div>
  )
}


export default React.memo(HomePage)