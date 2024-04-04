import React from "react"

function NavBar() {
  return (
    <div className="flex justify-between mt-5 mx-10">
        {/* {Logo} */}
        <div className="text-xl text-wide">
            GREAT<span className="font-bold">MINDS</span>Hub
        </div>
        {/* {Menu} */}
        <div className="">
           <ul className="flex space-x-5 text-zinc-400">
            <li className="hover:text-white hover:bg-blue-700 px-3 rounded-xl duration-200 ease-in"><a href="a">Home</a></li>
            <li className="hover:text-white hover:bg-blue-700 px-3 rounded-xl duration-200 ease-in"><a href="a">About us</a></li>
            <li className="hover:text-white hover:bg-blue-700 px-3 rounded-xl duration-200 ease-in"><a href="a">Work</a></li>
            <li className="hover:text-white hover:bg-blue-700 px-3 rounded-xl duration-200 ease-in"><a href="a">Info</a></li>
            <li className="bg-blue-600 text-white px-2 rounded-xl "><a href="a">Get Started</a></li>
            </ul> 
        </div>
    </div>
  )
}

export default NavBar
