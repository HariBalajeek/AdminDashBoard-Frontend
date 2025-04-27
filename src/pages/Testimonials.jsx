import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alice Johnson",
      role: "Frontend Developer",
      feedback: "The platform helped me land my dream job in just two weeks! The job listings are fantastic, and the interface is very user-friendly.",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Bob Lee",
      role: "UX/UI Designer",
      feedback: "Amazing experience! I was able to find the right candidate for my startup within days. Highly recommend this service for both job seekers and recruiters.",
      avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    {
      name: "Charlie Brown",
      role: "Software Engineer",
      feedback: "The process was seamless. From job search to application submission, everything is smooth and efficient.",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="w-full flex justify-center items-start py-10">
      <div className="w-[856px]">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">What Our Users Say</h1>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-5 ring-2 ring-gray-50 shadowfor"
            >
              {/* Avatar and User Info */}
              <div className="flex items-center mb-3">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} Avatar`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-800">{testimonial.name}</h2>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              {/* Feedback */}
              <p className="text-gray-600 text-base font-medium mt-3">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
