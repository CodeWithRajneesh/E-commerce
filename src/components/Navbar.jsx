import { Heart, ShoppingCart, UserRound } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <nav className="font-mono bg-white border-gray-200 shadow-3xl">
      <div className="justify-around mx-auto sm:flex-row flex flex-col md:flex-row md:items-center mb-3">
        <div className="flex ml-0 items-center">
          <img className="h-16 w-16 rounded-full" src="https://www.searchenginejournal.com/wp-content/uploads/2022/08/google-shopping-ads-6304dccb7a49e-sej-1280x720.png" alt="Flash Store" />
          <span className="ml-3 text-lg lg:text-xl font-semibold">Flash Store</span>
        </div>
        <div>
          <div className="mt-7 ml-3 py-5 hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <ul className="flex flex-col p-4 md:p-0 mt-4  border border-gray-100 rounded-lg bg-gray-50 md:space-x-3 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-lg md:font-semibold font-semibold lg:text-xl  lg:space-x-8">
              <li>
                <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">MEN</Link>
              </li>
              <li>
                <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">WOMEN<sup style={{ color: "red" }}>New</sup></Link>
              </li>
              <li>
                <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">KIDS</Link>
              </li>
              <li>
                <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">BEAUTY</Link>
              </li>
              <li>
                <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">HOME & KITCHEN</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="md:mt-0">
          <ul className="flex space-x-4 mb-2 mx-4 ">
            <li>
              <button>
                <Link to="/" className="flex items-center space-x-1">
                  <Heart />
                  <span className='font-bold'>Wishlist</span>
                </Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/" className="flex items-center space-x-1">
                  <ShoppingCart />
                  <span className='font-bold'>Cart</span>
                </Link>
              </button>
            </li>
            <li>
              <button onClick={() => loginWithRedirect()}>
                <NavLink to="/" className="flex items-center space-x-1">
                  <UserRound />
                  <span className='font-bold'>User</span>
                </NavLink>
              </button>
            </li>
          </ul>
          <form className="flex items-center ml-4">
            <div className="relative">
              <input type="text" className="bg-gray-50 border border-slate-950 text-gray-900 text-sm h-8 px-2 rounded" placeholder="SEARCH HERE..." required />
              <button type="button" className="absolute inset-y-0 right-0 flex items-center px-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </button>
            </div>
            <button type="submit" className="ml-2 flex items-center justify-center px-3 text-sm font-medium text-white bg-purple-700 border border-slate-950 h-8 rounded">
              SEARCH
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
