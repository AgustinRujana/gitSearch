//Components imports
import { LocationMarkerIcon } from '@heroicons/react/outline';

//This component read the user information send via props from storico localStorage, and renders it.
const UserRows = (props) => {
  return (
    <li>
      <div className='flex items-center p-2 text-white transition-all duration-500 bg-gradient-to-t from-gray-700 via-gray-800 to-gray-900 bg-size-200 bg-pos-0 hover:bg-pos-100'>
        <img
          className='rounded-full h-12 mr-2'
          src={`https://avatars.githubusercontent.com/${props.user.login}`}
        />
        <div className='w-full grid sm:grid-cols-2 gap-2'>
          <div className='col-span-1'>
            <p className='tracking-tight'>{props.user.name}</p>
            <p className='text-sm tracking-tight truncate text-gray-400'>
              {props.user.bio}
            </p>
          </div>
          <div className='col-span-1'>
            <p className='tracking-tight'>{props.user.company}</p>
            {props.user.location && (
              <p className='flex items-center text-sm tracking-tight truncate text-gray-400'>
                <LocationMarkerIcon className='h-4 mr-1' />
                {props.user.location}
              </p>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default UserRows;
