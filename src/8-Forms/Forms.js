import React, { useState } from 'react'
import MyFormik from './FormikYup/MyFormik'

const Forms = () => {
  
//   const [name,setName] = useState ("")
//   const [inputs,setInputs] = useState({})
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`The name you entered was : ${name}`)
//   }
 
 
// const handleChange = (event) => {
//     const name = event.target.name
//     const value = event.target.value
//     setInputs(values => ({...values,[name]: value}))
//     }
//  const handleSubmit2 = (event) => {
//     event.preventDefault();
//     console.log(inputs)
//  }

//  const [myCar,setMyCar] = useState("Volvo")

//  const handleChange2 = (event) => {
//     setMyCar(event.target.value)
//  }
    return (
    <div>
        {/* <form onSubmit={handleSubmit}>
            <label>Enter your name:
            <input 
            type="text" 
            value={name}
            onChange={(event) => setName(event.target.value)}
            />
            </label>
            <input type='submit'/>
        </form> */}
        {/* <form onSubmit={handleSubmit2}>
            <label>Enter your name:</label>
            <input
            type='text'
            name='username'
            value={inputs.username || ""} 
            onChange={handleChange}
            />
            <label>Enter your age:</label>
            <input
            type='number'
            name='age'
            value={inputs.age || ""}
            onChange={handleChange}
            />
            <input type='submit'/>
        </form>
        <form>
            <select value={myCar} onChange={handleChange2}>
                <option value={"Ford"}>Ford</option>
                <option value={"Volvo"}>Volvo</option>
                <option value={"Fiat"}>Fiat</option>
            </select>
        </form> */}
        <MyFormik/>
    </div>
  )
}

export default Forms

// onChange: Form'un içindeki form elementlerinin(input) value'su her değiştiğinde bu değişen value'yu bizim her defasında elde etmemize olanak sağlayan eventtir.
// handleSubmit aslında kendi yazdığımız bir isimdir ancak yazılım alışkanlığı haline geldiği için sürekli bu isim kullanılır.
// preventDefault :Normalde her form submit edildiğinde sayfa yenileme özelliği gösterir.Bu özelliği ortadan kaldırmak yani sayfa yenilenmeden işlemimize devam etmek için preventDefaultu kullanırız.