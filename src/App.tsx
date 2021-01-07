import React from 'react';
import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { AutoGrid } from './utils/AutoGrid';

function App() {
   const itemList = Array(10)
      .fill(null)
      .map((x, i) => (
         <div
            key={i}
            className="h-32 w-full bg-gray-800 text-gray-100 border border-black shadow-lg rounded-2xl grid place-items-center resize"
         >
            item {i}
         </div>
      ));
   return (
      <div className="App h-screen flex flex-col">
         <Header />
         <main className="flex-grow">
            <div className="p-6 space-y-8">
               <p>Hello I am main</p>
               <button className="btn">Demo button</button>
            </div>
            <section>
               <h2 className="p-6 text-3xl">AutoGrid component:</h2>
               <div className="p-6 bg-gradient-to-r from-pink-400 to-blue-400">
                  <h3 className="mb-6 text-gray-50 text-2xl font-bold">Fixed dimension items</h3>
                  <AutoGrid
                     itemWidth={'8rem'}
                     className="border-2 border-gray-800 gap-8 place-content-center overflow-auto resize"
                  >
                     {itemList}
                  </AutoGrid>
               </div>
               <div className="p-6 bg-gradient-to-r from-green-400 to-brand-400">
                  <h3 className="mb-6 text-gray-50 text-2xl font-bold">Flexible dimension items</h3>
                  <AutoGrid
                     itemWidth={'8rem'}
                     className="border-2 border-gray-800 gap-8 overflow-auto resize"
                     flexibleItems
                  >
                     {itemList}
                  </AutoGrid>
               </div>
            </section>
         </main>
         <Footer />
      </div>
   );
}

export default App;
