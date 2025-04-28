import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import CreateJobModal from './CreateJobModal';
import { Menu, X } from 'lucide-react'; 

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <div className="w-full flex flex-col items-center py-5 relative">
      <nav className="bg-white rounded-full ring-gray-50 ring-2 shadowfor px-5 py-5 flex gap-7 items-center font-medium">

        {/* Logo */}
        <div className="flex items-center justify-start">
          <img 
            src="https://logo.clearbit.com/brandfolder.com" 
            alt="Logo" 
            className="w-10 h-10 object-cover mr-5 rounded-full" 
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-16">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li> 
          <li><Link to="/findjobs" className="hover:text-blue-500">Find Jobs</Link></li>
          <li><Link to="/findtalents" className="hover:text-blue-500">Find Talents</Link></li>
          <li><Link to="/testimonials" className="hover:text-blue-500">Testimonials</Link></li>
          <li>
            <button 
              onClick={() => setShowModal(true)} 
              className="rounded-full px-3 py-2 shadow-xl bg-gradient-to-b from-violet-600 to-violet-800 text-white"
            >
              Create Jobs
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="bg-white mt-3 py-5 rounded-2xl ring-2 ring-gray-100 shadow-lg flex flex-col items-center gap-5 font-medium w-[80%] max-w-md md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-500">Home</Link>
          <Link to="/findjobs" onClick={() => setMenuOpen(false)} className="hover:text-blue-500">Find Jobs</Link>
          <Link to="/findtalents" onClick={() => setMenuOpen(false)} className="hover:text-blue-500">Find Talents</Link>
          <Link to="/testimonials" onClick={() => setMenuOpen(false)} className="hover:text-blue-500">Testimonials</Link>
          <button 
            onClick={() => {
              setShowModal(true);
              setMenuOpen(false);
            }} 
            className="rounded-full px-4 py-2 shadow-xl bg-gradient-to-b from-violet-600 to-violet-800 text-white"
          >
            Create Jobs
          </button>
        </div>
      )}

      {/* Modal rendered here */}
      <CreateJobModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default NavBar;
