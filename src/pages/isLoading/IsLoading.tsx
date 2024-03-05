// import React from 'react'

import { Triangle } from "react-loader-spinner";
import logo from "../../assets/images/logo.png"

const IsLoading = () => {

  return (
    <div style={{width:"100%", height:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

        {/* <i style={{fontSize:"15px", color:"#0a4757", marginBottom:"40px"}}>SWYS</i> */}

        <img src={logo} className="w-[80px]" alt="Logo" />

        <Triangle
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />

        <i style={{fontSize:"17px", color:"#00a4f2", marginTop:"40px"}}>Loading...</i>

    </div>
  )
}

export default IsLoading