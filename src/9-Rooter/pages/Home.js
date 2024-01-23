import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate()
  
    return (
    <div>
        <label>İletişime geçmek için tıklayınz.</label>
        <button onClick={()=>navigate("contact")}>Contact</button>
        <button onClick={()=>navigate(-1)}>Geri</button>
    </div>
  )
}

export default Home