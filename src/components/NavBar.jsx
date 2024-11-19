const NavBar = () => {
    return (
      <nav className="bg-black text-white p-4 flex items-center justify-between">
        {/* App Logo */}
        <div className="flex items-center">
          {/* <h1 className="text-2xl font-bold text-red-600">MovieApp</h1> */}
        </div>
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li className="hover:text-red-600 cursor-pointer">Home</li>
          <li className="hover:text-red-600 cursor-pointer">Movies</li>
          <li className="hover:text-red-600 cursor-pointer">TV Shows</li>
          <li className="hover:text-red-600 cursor-pointer">About</li>
        </ul>
      </nav>
    );
  };
  
  export default NavBar;
  