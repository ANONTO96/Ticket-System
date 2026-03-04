

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <a className="btn btn-ghost text-xl">CS--Ticket System</a>
  </div>
  <div className="navbar-end">
    <div className="hidden md:flex">
    <ul className="menu menu-horizontal flex-nowrap px-1">
      <li><a>Home</a></li>
      <li>
       <a>FAQ</a>
      </li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
    <a className="btn px-6 py-2 rounded-lg
  text-white font-medium
  bg-linear-to-r from-purple-800 to-purple-400
  shadow-md
  hover:shadow-lg
  hover:scale-105
  transition-all duration-300">+ New Ticket</a>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
      <li>
       <a>FAQ</a>
      </li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
      </ul>
    </div>
  </div>
</div>
    );
};

export default Navbar;