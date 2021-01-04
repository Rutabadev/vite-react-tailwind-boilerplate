import React from 'react';
import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';

function App() {
   return (
      <div className="App h-screen flex flex-col">
         <Header></Header>
         <main className="flex-grow">
            <h2>Hello I am main my boy</h2>
         </main>
         <Footer></Footer>
      </div>
   );
}

export default App;
