import React from 'react';

const FindTalents = () => {
  const talents = [
    {
      name: "John Doe",
      role: "Frontend Developer",
      skills: "React, JavaScript, HTML, CSS",
      experience: "3+ years",
      location: "Remote",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      salaryExpectation: 8,
    },
    {
      name: "Jane Smith",
      role: "UI/UX Designer",
      skills: "Figma, Adobe XD, Sketch",
      experience: "2+ years",
      location: "New York",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg",
      salaryExpectation: 7,
    },
    // add more talents here
  ];

  const handleHire = () => {
    alert('Hired Successfully!');
  };

  return (
    <div className="w-full flex justify-center items-start py-10">
      <div className="w-[856px]">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Find Top Talents</h1>

        <div className="grid grid-cols-1 gap-6">
          {talents.map((talent, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-5 ring-2 ring-gray-50 shadowfor"
            >
              {/* Profile Avatar */}
              <div className="flex items-center mb-3">
                <img
                  src={talent.avatar}
                  alt={`${talent.name} Avatar`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-800">{talent.name}</h2>
                  <p className="text-sm text-gray-500">{talent.role}</p>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600 mt-2 font-medium">
                {/* Skills */}
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 7.5h-15M4.5 12h15m-15 4.5h15" />
                  </svg>
                  <span>Skills: {talent.skills}</span>
                </div>

                {/* Experience */}
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                  </svg>
                  <span>{talent.experience}</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 14c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3Zm0-5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                  </svg>
                  <span>{talent.location}</span>
                </div>

                {/* Salary Expectation */}
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                  </svg>
                  <span>💸 Expecting: {talent.salaryExpectation} LPA</span>
                </div>
              </div>

              {/* Hire Button */}
              <button
                onClick={handleHire}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 mt-4 rounded-md"
              >
                Hire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindTalents;
