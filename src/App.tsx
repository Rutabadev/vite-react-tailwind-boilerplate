import React, { useState } from 'react';
import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { AutoGrid } from './utils/AutoGrid';

function App() {
   const [isDarkMode, setIsDarkMode] = useState(
      localStorage.theme === 'dark' ||
         (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
   );

   const toggleDarkMode = () => {
      const newIsDarkMode = !isDarkMode;
      setIsDarkMode(newIsDarkMode);
      localStorage.setItem('theme', newIsDarkMode ? 'dark' : 'light');
   };

   const itemList = Array(10)
      .fill(null)
      .map((x, i) => (
         <div
            key={i}
            className="h-32 w-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors shadow-lg rounded-2xl grid place-items-center"
         >
            item {i}
         </div>
      ));
   return (
      <div className={isDarkMode ? 'dark' : ''}>
         <div className="h-screen dark:text-gray-100 flex flex-col">
            <Header />
            <main className="flex-grow dark:bg-gray-800 transition-colors">
               <div className="p-6 space-y-8">
                  <p>Hello I am main</p>
                  <button
                     className="btn"
                     onClick={toggleDarkMode}
                     onContextMenu={(e) => {
                        e.preventDefault();
                        if (confirm('Do you want to reset theme preference to system default ?')) {
                           localStorage.removeItem('theme');
                           setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
                        }
                     }}
                  >
                     Toggle dark mode
                  </button>
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
      </div>
   );
}

export default App;
