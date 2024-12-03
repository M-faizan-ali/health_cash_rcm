import React from 'react'

export default function TailoredForEverySpecialty() {
  return (
    <div className="w-full flex justify-center">
        <div className="w-[90%] grid grid-cols-2 gap-4">
        <div 
          className=" bg-cover bg-center rounded-[15px]"
          style={{ 
            backgroundImage: `url('https://medipaybilling.com/wp-content/uploads/2024/01/bg-img-05.jpg')`,
            height: '300px' // Set the height according to your design needs
          }}
        ></div>
        <div className="bg-gray-300 p-4">Column 2</div>
        </div>
  </div>
  )
}
