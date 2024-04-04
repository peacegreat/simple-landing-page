import React from "react"
import pic from "../components/pic.png"

function Main() {
  return (
    <div className="grid grid-cols-2 px-5 md:px-16" >
      {/* {text Area} */}
      <div className="flex flex-col h-screen justify-center">
        <h1 className="text-4xl font-bold leading-10 tracking-wider">Promo<br/>Code</h1>
        <p className="text-lg text-light">HI, WE ARE PROVIDING HIGH QUALITY PRODUCT OVER THE WORLD THROUGH DIFFERENT SERVICES</p>
        <button className="mt-5 bg-blue-700 hover:bg-blue-600 text-white h-10 w-24 rounded-full">Shop Now</button>

      </div>
      {/* {Image} */}
      <div className="flex flex-col justify-center items-center h-screen place">
        <img className="w-96 h-99 object-cover  " src={pic} alt=""/>
      </div>
    </div>
  );
}

export default Main;
