import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
  
  const [count,setCount] = useState(0)
  const [count2,setCount2] = useState(0)

//   useEffect(() => {
//     setTimeout(() => {
//         setCount(count => count + 1)
//     },1000)
//   })
//   UseEffectin bu şekilde kullanımı ilk seferinde bir kere çalıştır,sonrasında her renderda tekrar çalıştır şeklindedir.

// useEffect(() => {
//     setTimeout(() => {
//         setCount(count => count + 1)
//     },1000)
//   },[])
//   Bu fonksiyonda useEffect arrow fonksiyonunun süslü parantez kapanışının yanına [] eklediğimizde fonksiyonu bir kere çalıştır anlamına gelir.

// useEffect(() => {
//     setTimeout(() => {
//         setCount2(count => count + 1)
//     },1000)
//   },[count2])
//   bir bağımlılığa göre render eden useEffecttir.Köşeli parantezin içinde ki count2 nin anlamı ise şu count2 yi dinle değişiklik yaparsa render et.
// bir kere hertürlü çalışır devamında bağımlılık değiştikçe çalışır.

// useEffect(() => {
//     setInterval(() => {
//         setCount(count => count + 1)
//     },1000)
// },[count])
// setInterval kendi kendine sürekli bir döngü içinde çalışan bir içeriktir.
// üstteki kargaşanın sebebi useEffect ve setIntervalın çatışmasından dolayı.ikisi de birbirini tetiklediği için artış kontrolsüz olmakta.
useEffect(()=> {
    let timer = setInterval(()=> {
        setCount2(count => count + 1)
    },1000)
    return () => clearInterval(timer)
},[count2])
// Bu fonksiyonda setIntervalı timer değişkenine atadık ve clearInterval ile her seferinde setInterval yenilenir , setInterval sıfırdan başlayarak her seferindee tekrar başlar ve fonksiyon 1er artarak çalışır.



    return (
    <div>
        <h1>I have rendered {count} times </h1>
        <h1>I have rendered {count2} times </h1>
    </div>
  )
}

export default UseEffectHook

// Returnun içi değiştikçe useeffect çalışır.
