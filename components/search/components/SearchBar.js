import { useEffect, useState } from 'react';
import { LocationMarkerIcon } from '@heroicons/react/outline';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  const [user, setUser] = useState({});
  const [activeSearch, setActiveSearch] = useState(false);

  useEffect(() => {
    if (search !== '') {
      setActiveSearch(true);
      fetch(`https://api.github.com/users/${search}`)
        .then((res) => res.json())
        .then((json) => {
          setUser(json);
        });
    } else {
      setActiveSearch(false);
    }
  }, [search]);

  useEffect(() => {
    if (user.message) {
      setUser(false);
    } else {
      console.log(user);
    }
  }, [user]);

  return (
    <div className='w-full max-w-xl relative px-4'>
      <div className='relative z-0 group'>
        <input
          type='text'
          name='user_search'
          className='block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-purple-700 peer'
          value={search}
          placeholder=' '
          onChange={(e) => setSearch(e.target.value)}
          required
        />
        <label
          htmlFor='user_search'
          className='absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-4 peer-focus:text-purple-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Cerca utente
        </label>
        {activeSearch ? (
          user ? (
            <a href={user.html_url} target='_blank'>
              <div className='flex items-center p-2 text-white transition-all duration-500 bg-gradient-to-t from-gray-700 via-gray-800 to-gray-900 bg-size-200 bg-pos-0 hover:bg-pos-100'>
                <img
                  className='rounded-full h-12 mr-2'
                  src={`https://avatars.githubusercontent.com/${search}`}
                />
                <div className='w-full grid sm:grid-cols-2 gap-2'>
                  <div className='col-span-1'>
                    <p className='tracking-tight'>{user.name}</p>
                    <p className='text-sm tracking-tight truncate text-gray-400'>
                      {user.bio}
                    </p>
                  </div>
                  <div className='col-span-1'>
                    <p className='tracking-tight'>{user.company}</p>
                    {user.location && (
                      <p className='flex items-center text-sm tracking-tight truncate text-gray-400'>
                        <LocationMarkerIcon className='h-4 mr-1' />
                        {user.location}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </a>
          ) : (
            <div className='h-16 w-full absolute flex items-center justify-center text-white transition-all duration-500 bg-gradient-to-t from-gray-700 via-gray-800 to-gray-900 bg-size-200 bg-pos-0 hover:bg-pos-100'>
              Nessun utente
            </div>
          )
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default SearchBar;
