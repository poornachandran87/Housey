import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      <div>
          <div className='flex flex-col justify-center'>

              <div className='flex flex-col justify-center items-center mx-[32px] mt-[183px] '>

                  <img className='h-[200px] w-[300px]' src="./assets/logo.png" alt="logo" />
                  <p className='text-[#676C7A] text-center font-medium text-xl'>Crafting Dreams, Building Futures </p>

              </div>
              <div className='flex justify-center mt-[375px] '>
             
                    <Link to={'/register'}> 
                  <button className='bg-[#E9EAF0] w-[324px] h-[57px] text-[#646464] rounded-3xl shadow-effect py-3 px-6 items-center '>GET STARTED</button>
                  </Link>

              </div>
          </div>
      </div>
  ) 
}

export default Home
