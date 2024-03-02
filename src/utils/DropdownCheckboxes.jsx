import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const DropdownCheckboxes = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (value) => {
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((item) => item !== value)
      : [...selectedValues, value];
    setSelectedValues(newSelectedValues);
    onChange(newSelectedValues); // Pass selected values to parent
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        BRANDS
        <svg
          className="-mr-1 ml-2 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M10 12l-4-4h8l-4 4z" clipRule="evenodd" />
        </svg>
      </button>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="origin-top-left absolute left-0 z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <label
                key={option.value}
                className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  checked={selectedValues.includes(option.value)}
                  onChange={() => handleChange(option.value)}
                />
                <span className="ml-2 text-sm text-gray-900">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default DropdownCheckboxes;
