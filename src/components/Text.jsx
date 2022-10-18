import React from 'react'

const Text = () => {
  return (
    <div>
        <div className=" mt-[120px] space-y-3">
       <div>
       <div className="  space-x-1 justify-center font-extrabold text-center  ">
          <p className=" text-[35px] sm:text-[55px]  ;">Data to enrich your  <span className=" text-blue-700 sm:text-[55px] inline-block text-[35px]"> online business</span> </p>
        </div>
        <div className=" text-center text-gray-400">
          <p className=" text-[20px] ">
            Lorem ipsum dolor sit amet  consectetur adipisicing elit. Ab, 
          </p>
          <p className=" text-[20px] ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>
       </div>
        <div className=" text-center">
          <button
            type="button"
            className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md  text-lg  sm:px-6 sm:w-auto sm:py-3.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Get started
          </button>
          <button
            type="button"
            class="text-blue-700 w-full bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 sm:px-6 sm:w-auto sm:py-3.5 rounded-md text-lg  mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Live demo
          </button>
        </div>
      </div>
    </div>
  )
}

export default Text