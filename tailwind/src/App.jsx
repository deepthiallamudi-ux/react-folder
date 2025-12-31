
import Assign from "./assign";


function App() {  

return(
  // <div className="bg-emerald-400  p-4">   
  //  <h1>Tailwind CSS with React</h1> 
  // <div className="text-yellow-300 bg-purple-900"> Welcome to Tailwind CSS!
  // {/* we can use class or classname */}
  //   <p className="text-green-600 bg-orange-800">This is a sample application using Tailwind CSS!</p> 
  //     <p className="text-[#e45c92] bg-blue-500"> Hello World</p>
  //     <h1 className ="text-[rgb(141,98,229)]">deepthi is beautiful</h1>
  //     </div>
  // </div>
<>
<div class="bg-lime-100 h-screen p-4 w-full">
  <div class="bg-amber-400 px-6 py-2 m-1  text-indigo-600 flex justify-between items-center">
    <h1 class="text-indigo-600 text-3xl font-bold font tracking-widest">My Website</h1>
  <nav class="flex gap-5">
    <a href="#">Home</a>
    <a href="#" class="ml-4">About</a>
    <a href="#" class="ml-4">Contact</a>
    </nav>
    </div>
  <div class="space-y-7 flex-grow">
    <section class="text-center">
      <h2 class="mb-4 text-xl font-semibold text-amber-500 sm:text-amber-800 md:text-blue-700">welcome to our website</h2>
      <p >This is a sample website using Tailwind CSS for styling. Tailwind CSS provides utility-first classes that make it easy to style your components directly in your markup.</p>
    </section>
    <section>
  
      <h2 class="mb-4 text-xl font-semibold text-center">Features</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
    <div class="bg-amber-300 p-4 rounded-2xl">feature 1</div>
    <div class="bg-amber-300 p-4 rounded-2xl">feature 2</div>
    <div class="bg-amber-300 p-4 rounded-2xl">feature 3</div>
    <div class="bg-amber-300 p-4 rounded-2xl">feature 1</div>
    <div class="bg-amber-300 p-4 rounded-2xl">feature 2</div>
    <div class="bg-amber-300 p-4 rounded-2xl">feature 3</div>
  </div>
    </section>
  </div>
  <div class=" bg-amber-500 py-6 text-center text-sm   text-lime-700 mt-14 font-extrabold" >&copy; 2024 My Website</div>
  <h3  class="bg-amber-500 py-6 text-center text-sm   text-lime-700 mt-14 font-extrabold" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos cupiditate quia inventore. Eaque qui, explicabo facilis minus id, excepturi ipsum eius repellendus deserunt debitis cum deleniti error possimus odio! Iste!</h3>
</div>
</>
)
}

export default App;
