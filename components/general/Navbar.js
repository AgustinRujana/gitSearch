const Navbar = () => {
  return (
    <nav className=" bg-white flex items-center justify-between text-gray-900">
      <p className="text-3xl font-thin tracking-wide py-2 px-4 cursor-default select-none sm:block hidden">Rujana</p>
      <p className="text-3xl font-thin tracking-wide py-2 px-4 cursor-default select-none sm:hidden">AR</p>
      <div className="flex items-center justify-between gap-2  py-2 px-4">
        <a href="/">
          <p className="font-thin uppercase tracking-wide hover:scale-105 hover:text-purple-600 transition-all">Home</p>
        </a>
        <a href="/storico">
				<p className="font-thin uppercase tracking-wide hover:scale-105 hover:text-purple-600 transition-all">Storico</p>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
