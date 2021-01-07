import React from 'react';
import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';

function App() {
   return (
      <div className="App h-screen flex flex-col">
         <Header/>
         <main className="p-6 flex-grow">
            <h2>Hello I am main</h2>
         </main>
         <Footer/>
      </div>
   );
}

export default App;
