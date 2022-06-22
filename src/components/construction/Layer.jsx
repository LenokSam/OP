import React from 'react'


function Layer(props) {
  const {layer} = props
  return (
    <div className='layer-construction' key={layer.name }>
      <p>
        `Слой {layer.name}`
      </p>
      <p>
          {layer.transcalency}
      </p>
      <p>
          {layer.thickness}
      </p>
    </div>
  )
}

export default React.memo(Layer)