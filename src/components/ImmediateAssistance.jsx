import React from 'react';

export default function ImmediateAssistance() {
  return (
    <div className=' mt-[200px] flex width-[1140px] m-auto'>
        <div className='w-[50%] flex justify-center items-center'>
            <img src="https://medipaybilling.com/wp-content/uploads/2024/09/online-support.gif" alt="" className='w-[640px]' />
        </div>
      <div className="h-screen flex justify-center items-center width-[50%]">
        <div className="py-8 px-6 max-w-md bg-white bg-opacity-30 rounded-lg shadow-lg backdrop-blur-xl backdrop-filter">
          <h1 className="text-3xl font-bold text-center text-heading-color mb-5">Looking for Immediate Assistance</h1>
          
          <form className="flex flex-col" action="https://fabform.io/f/{form-id}" method="post">
            <div className="mb-5">
              <label className="text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
              <input 
                className="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal" 
                type="text" 
                id="name" 
                name="name" 
                required 
              />
            </div>
            <div className="mb-5">
              <label className="text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
              <input 
                className="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal" 
                type="email" 
                id="email" 
                name="email" 
                required 
              />
            </div>
            <div className="mb-5">
              <label className="text-gray-700 font-semibold mb-2" htmlFor="message">Message</label>
              <textarea 
                className="bg-transparent border rounded-lg shadow border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-4 block w-full appearance-none leading-normal" 
                id="message" 
                name="message" 
                rows="5" 
                required
              ></textarea>
            </div>
            <button 
              className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out mb-5" 
              type="submit"
            >
              Send Message
            </button>
          </form>
          
          <a href="https://veilmail.io/e/FkKh7o" className="font-medium text-blue-600 hover:underline">
            Or click here to reveal our protected email address
          </a>
        </div>
      </div>
    </div>
  );
}
