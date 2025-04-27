import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 🛑 Import Link
import CreateJobModal from './CreateJobModal';

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='w-full flex justify-center items-center py-5'>
      <nav className="bg-white rounded-full ring-gray-50 ring-2 shadowfor px-5 py-5 flex gap-7 items-center font-medium">
        <div className='flex items-center justify-start'>
          <img src="https://logo.clearbit.com/brandfolder.com" alt="Logo" className='w-10 h-10 object-cover mr-5 rounded-full' />
        </div>

        <ul className="flex items-center gap-16">
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
      </nav>

      {/* Modal rendered here */}
      <CreateJobModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default NavBar;
