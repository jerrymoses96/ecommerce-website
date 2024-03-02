import React, { useState } from "react";

const RatingFilterDropdown = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (value) => {
    const newSelectedRatings = selectedRatings.includes(value)
      ? selectedRatings.filter((rating) => rating !== value)
      : [...selectedRatings, value];
    setSelectedRatings(newSelectedRatings);
    onChange(newSelectedRatings); // Pass selected ratings to parent
  };

  const ratingOptions = [
    { value: 5, label: "5 Stars" },
    { value: 4, label: "4 Stars & Up" },
    { value: 3, label: "3 Stars & Up" },
    { value: 2, label: "2 Stars & Up" },
    { value: 1, label: "1 Star & Up" },
  ];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Ratings
        <svg
          className="-mr-1 ml-2 h-5 w-5 text-gray-400 transform transition-transform"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <path fillRule="evenodd" d="M10 12l-4-4h8l-4 4z" clipRule="evenodd" />
        </svg>
      </button>
      {isOpen && (
        <div className="origin-top-left absolute left-0 z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {ratingOptions.map((option) => (
              <label
                key={option.value}
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  checked={selectedRatings.includes(option.value)}
                  onChange={() => handleChange(option.value)}
                />
                <span className="ml-2 text-sm text-gray-900">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingFilterDropdown;
