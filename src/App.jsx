import { useState } from 'react';
import './App.css'
import AnimalShow from './components/AnimalShow'

const getRandomAnimal = () => {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']

  return animals[Math.floor(Math.random() * animals.length)]
}


function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  }

  const renderedAnimals = animals.map((animal , index) => {
    return <AnimalShow type={animal} key={index} />
  });

  return (
    <>
      <div className="flex flex-col space-y-10">
        <button onClick={handleClick} className='bg-gray-50 py-2 px-3 rounded-lg w-fit shadow-gray-400 shadow-sm hover:scale-105 transition mt-5 mx-auto'>Add Animal</button>
        <div className='flex flex-wrap mx-10'>{renderedAnimals}</div>
      </div>
    </>
  )
}

export default App
