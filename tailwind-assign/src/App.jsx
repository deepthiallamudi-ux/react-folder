import { useState } from 'react';

function App() {
  const [color, setColor] = useState("purple")
  
  const clrChange = () => {
    setColor(color === "purple" ? "yellow" : "purple");
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Tailwind Color Change Example</h1>
      <div className={`p-6 rounded-lg mb-4 ${color === "purple" ? "bg-purple-500" : "bg-yellow-500"} w-35 text-white`}>its all confusing</div>
      <button  onClick={clrChange} className='rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-500'>Change Color</button>
    <img src="https://tinypng.com/images/social/website.jpg" alt="image" />
    </div>
  );
}

export default App;