const SearchBar = () => {
  return (
      <div className="relative z-0 w-full max-w-xl group px-4">
        <input
          type="text"
          name="user_search"
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-purple-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="user_search"
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-4 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
         Cerca utente
        </label>
      </div>
  );
};

export default SearchBar;
