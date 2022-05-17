import React from 'react';
import './App.css';

import { InfoCard } from './components';
import { ILaptop } from './interfaces/ILaptop';
import DummyData from './utils/dummyData.json'

function App() {
  return (
    <div className="App text-3xl font-bold mt-5">
      <span className='mb-10'> Recommended laptops</span>
      <div className='flex-column center mt-10'>
        {DummyData.map((data: ILaptop) => {
          return (
            <InfoCard description={data.description} title={data.title} model={data.model} image={data.image} />
          )
        })}

      </div>
    </div>
  );
}

export default App;
