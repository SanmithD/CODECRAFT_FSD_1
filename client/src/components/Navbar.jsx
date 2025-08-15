import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UseAuthStore } from "../store/UseAuthStore";
import { UseThemeStore } from "../store/UseThemeStore";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { changeTheme, theme } = UseThemeStore();
  const { profile, auth } = UseAuthStore();

  useEffect(()=>{
    if(localStorage.getItem('token')){
      profile();
    }
  },[profile]);

  return (
    <nav className="navbar bg-base-100 shadow-md px-4 mx-auto ">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">
          ShopVerse
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-4">
        { auth?.role === 'admin' && (
          <Link to="/dashboard" className="btn btn-ghost">
          Dashboard
        </Link>
        ) }
        
        <Link to="/items" className="btn btn-ghost">
          Items
        </Link>
        <Link to="/about" className="btn btn-ghost">
          About
        </Link>
        <Link to="/profile" className="btn btn-ghost">
          Profile
        </Link>
        <button
          className="btn btn-ghost"
          onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-base-100 shadow-md flex flex-col items-start p-4 gap-2 md:hidden z-50">
          <Link
            to="/items"
            className="btn btn-ghost w-full"
            onClick={() => setIsOpen(false)}
          >
            Items
          </Link>
          <Link
            to="/about"
            className="btn btn-ghost w-full"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/profile"
            className="btn btn-ghost w-full"
            onClick={() => setIsOpen(false)}
          >
            Profile
          </Link>
          <button
            className="btn btn-ghost w-full"
            onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
