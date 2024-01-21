import React from 'react'

const Car = ({definition,addition}) => {
  
  
  
    return (
    <div>
        {/* <h2>I am a {Props.brand}</h2> */}
        {/* <h2>Im am a {props.brand.model} and {props.brand.name}</h2> */}
        {/* <h2>{props.definition.myCar.carName}</h2> */}
        {/* <h2>{props.definition.person.location}</h2> */}
        <h2>{definition.myCar.carName}</h2>
        <h2>{addition.carName}</h2>
    </div>
  )
}

export default Car

//  rafce yazarak otomatik olarak kodları oluşturabiliriz.