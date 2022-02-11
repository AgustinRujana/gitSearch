import { useEffect, useState } from 'react';

import UserRows from './components/UserRows';

const ContainerStorico = () => {
  const [storico, setStorico] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('storico')) {
      setStorico(JSON.parse(localStorage.getItem('storico')));
    }
  }, []);

  const deleteStorico = () => {
    setStorico([]);
    localStorage.removeItem('storico');
  };

  return (
    <section className='bg-gray-900 h-screen sm:flex items-center justify-center'>
      {storico.length > 0 ? (
        <div className='grid'>
          <ul>
            {storico.map((user) => (
              <UserRows user={user} key={user.name}/>
            ))}
          </ul>
          <button
            className='text-white rounded-full w-fit mx-auto mt-4 px-4 py-1 bg-purple-900 hover:bg-purple-700 transition-all duration-500'
            onClick={() => deleteStorico()}
          >
            Eliminare
          </button>
        </div>
      ) : (
        <a href='/'>
          <p className='font-thin text-xl text-white uppercase tracking-wide hover:scale-125 hover:text-gray-400 transition-all'>Home</p>
        </a>
      )}
    </section>
  );
};

export default ContainerStorico;
