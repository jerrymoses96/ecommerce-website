import { useState } from "react";

const PriceFilterDropdown = ({priceRanges, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (value) => {
    setSelectedPriceRange(value);
    onChange(value); // Pass selected price range to parent
  };

  // const priceRanges = [
  //   { min: 0, max: 1000, label: "Under ₹1000" },
  //   { min: 1000, max: 2000, label: "₹1000 - ₹2000" },
  //   { min: 2000, max: 3000, label: "₹2000 - ₹3000" },
  //   { min: 3000, max: 5000, label: "₹3000 - ₹5000" },
  //   { min: 5000, max: 10000, label: "₹5000 - ₹10000" },
  //   { min: 10000, max: 20000, label: "₹10000 - ₹20000" },
  //   { min: 20000, max: Infinity, label: "Over ₹20000" },
  // ];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Price Range
        <svg
          className="-mr-1 ml-2 h-5 w-5 text-gray-400 transform transition-transform"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
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
            {priceRanges.map((range, index) => (
              <label
                key={index}
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                <input
                  type="radio"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  name="priceRange"
                  checked={selectedPriceRange === index}
                  onChange={() => handleChange(index)}
                />
                <span className="ml-2 text-sm text-gray-900">
                  {range.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceFilterDropdown;
