import React, { useState } from 'react'

const UseStateHook = () => {
  
    const [ color,setColor] = useState("orange")

    const [car,setCar] = useState({
        brand:"Ford",
        model:"Mustang",
        year:"1964",
        color:"red"
    })
  
  
    return (
    <div>
        <h1> My favourite color is {color} </h1>
        <button type='button' onClick={()=> setColor("blue")}>Blue Button</button>
        <h1>It is a {car.color} {car.model} from {car.year}</h1>
        <button type='button' onClick={()=> setCar({...car,year:"1980", model:"Doblo"})}>Change Car</button>
    </div>
  )
}

export default UseStateHook

// Üç temel hook kuralı;
// Hook yalnızca component bileşenlerini içinden çağırılabiliyor
// Yalnızca bir bileşenin en üst seviyesini çağırabiliyor
// Hooku koşullu bir şekildew gerçekleştiremiyoruz

// const [Değişkenin kendisi,değiştirelecek içerik]