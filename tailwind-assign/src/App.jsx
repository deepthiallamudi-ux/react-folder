import { useState } from 'react';

function App() {
  const [color, setColor] = useState("purple")
  
  const clrChange = () => {
    setColor(color === "purple" ? "yellow" : "purple");
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Tailwind Color Change Example</h1>
      
      {/* Card Component */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm p-6">
        <img className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 mb-4" src="https://tinypng.com/images/social/website.jpg" alt="image" />
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Card Title</h2>
        <p className="text-gray-600 mb-4">
          This is a beautiful card component with an image, title, description, and a button. 
          All styled with Tailwind CSS.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
          Learn More
        </button>
      </div>

      <div className={`p-6 rounded-lg mt-8 mb-4 ${color === "purple" ? "bg-purple-500" : "bg-yellow-500"} text-white`}>its all confusing</div>
      <button onClick={clrChange} className='rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-500 px-4 py-2'>Change Color</button>

      <h2 className="text-xl md:text-3xl md:text-indigo-600 lg:text-5xl font-bold bg-linear-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent mt-8">This is my spirit animal</h2>
      <h4 className="mt-2">it is becauseof following reasons</h4>
      <ol type='I' className='list-disc list-inside pl-5 hover:text-blue-600 hover:font-semibold'>
        <li>it is cute so am i</li>
        <li>they sit alone when they are sad</li>
        <li>they are threat to their own existence</li>
        <li>they are goofy an clumsy</li>
      </ol>
      <img className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 mt-4 w-xl" src="https://tinypng.com/images/social/website.jpg" alt="image" />

      <table className='mt-6'>
        <thead className='bg-gray-600 text-white'>
          <tr>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">Age</th>
            <th className="px-6 py-3 text-left">City</th>
          </tr>
        </thead>
        <tbody>
          <tr className='even:bg-neutral-700'>
            <td className="px-6 py-4 border-b">Pavitra</td>
            <td className="px-6 py-4 border-b">30</td>
            <td className="px-6 py-4 border-b">New Delhi</td>
          </tr>
          <tr className='even:bg-neutral-700'>
            <td className="px-6 py-4 border-b">Janaki</td>
            <td className="px-6 py-4 border-b">25</td>
            <td className="px-6 py-4 border-b">Lahore</td>
          </tr>
              <tr className='even:bg-neutral-700'>
            <td className="px-6 py-4 border-b">Janahita</td>
            <td className="px-6 py-4 border-b">25</td>
            <td className="px-6 py-4 border-b">Ladakh</td>
          </tr>
              <tr className='even:bg-neutral-700'>
            <td className="px-6 py-4 border-b">Somesh</td>
            <td className="px-6 py-4 border-b">25</td>
            <td className="px-6 py-4 border-b">Los Angeles</td>
          </tr>
        </tbody>
      </table>

      <form className=' flex justify-center items-center mt-8'>
        <div className=" shadow-lg rounded-lg p-8 w-full max-w-md">

        <h3 className="text-2xl text-center font-bold mb-6">Sign Up</h3>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input type="password" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" />
          </div>
          
          <button className="w-full bg-emerald-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200">Submit</button>
        </div>
      </form>
<nav className="mt-6 bg-emerald-300 p-4 text-emerald-800 text-xl flex flex-col md:flex-row md:gap-8 md:justify-between">
  <a href='#' className="hover:text-red-600 transition-colors">Home</a>
  <a href='#' className="hover:text-red-600 transition-colors">About</a>
  <a href='#' className="hover:text-red-600 transition-colors">Services</a>
  <a href='#' className="hover:text-red-600 transition-colors">Contact</a>
</nav>
<div className=" bg-blue-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
    <div className="bg-amber-300 p-4 rounded-2xl">card 2</div>
    <div className="bg-amber-300 p-4 rounded-2xl">card 3</div>
    <div className="bg-amber-300 p-4 rounded-2xl">card 4</div>
    <div className="bg-amber-300 p-4 rounded-2xl">card 5</div>
    <div className="bg-amber-300 p-4 rounded-2xl">card 6</div>
</div>
    </div>
  );
}

export default App;