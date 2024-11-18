import React, { useState } from "react";
import { FiUser, FiCopy, FiShare2 } from "react-icons/fi"; // Importing some icons for the buttons

export const ActivityGraph = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const url = document.getElementById("website-url");
    url.select();
    document.execCommand("copy");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this website',
        text: 'Here is a link I wanted to share with you.',
        url: document.getElementById("website-url").value,
      })
      .then(() => console.log("Shared successfully!"))
      .catch((error) => console.log("Error sharing:", error));
    } else {
      alert("Sharing not supported on this device/browser.");
    }
  };

  return (
    <div className="col-span-8  overflow-hidden rounded border border-stone-300 h-60">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-semibold text-xl">
          <FiUser /> Copy Url:
        </h3>
      </div>

      {/* URL Copy and Share Section */}
      <div className="h-20 px-4">
        <div className="mb-2 flex justify-between items-center">
          <label
            htmlFor="website-url"
            className="text-lg font-medium text-gray-900 dark:text-white"
          >
            Share the Url with your Contacts
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <span className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-base font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg dark:bg-gray-600 dark:text-white dark:border-gray-600">
            URL
          </span>

          <div className="relative flex-grow">
            <input
              id="website-url"
              type="text"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-base border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value="https://flowbite.com"
              readOnly
              disabled
            />
          </div>

          <button
            onClick={handleCopyClick}
            className="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-r-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border border-blue-700 dark:border-blue-600 hover:border-blue-800 dark:hover:border-blue-700"
            type="button"
          >
            <FiCopy className="w-4 h-4" />
          </button>

          <button
            onClick={handleShareClick}
            className="ml-2 flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-white bg-green-700 rounded-r-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 border border-green-700 dark:border-green-600 hover:border-green-800 dark:hover:border-green-700"
            type="button"
          >
            <FiShare2 className="w-4 h-4" />
          </button>

          <div
            id="tooltip-website-url"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
          >
            <span id="default-tooltip-message">Copy link</span>
            <span id="success-tooltip-message" className={`hidden ${copied ? 'block' : ''}`}>
              Copied!
            </span>
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>

        <p id="helper-text-explanation" className="mt-2 text-lg text-gray-500 dark:text-gray-400">
          Security certificate is required for approval.
        </p>
      </div>
    </div>
  );
};
