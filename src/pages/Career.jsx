// Import React
import React, { useState } from "react";

// Career Page Component
const Career = () => {
  const [fileError, setFileError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validFormats = ["application/pdf", "application/msword"];
      if (!validFormats.includes(file.type)) {
        setFileError("Only PDF and DOC formats are allowed.");
        e.target.value = ""; // Reset the file input
      } else {
        setFileError(""); // Clear any previous error
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f3f3] text-[#222] flex flex-col items-center p-6">
      {/* Heading Section */}
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold">Join the Team at Luytens</h1>
        <p className="mt-4 text-lg">
          Collaborate with us to innovate and grow. We value creativity, passion, and teamwork.
        </p>
      </header>

      {/* Form Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl">
        <form
          action="#"
          method="POST"
          className="flex flex-col gap-6"
        >
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#222]"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#222]"
              required
            />
          </div>

          {/* Resume or Company Name Input */}
          <div>
            <label htmlFor="resume" className="block text-sm font-medium mb-2">
              Upload Resume or Company Broucher (PDF/DOC formats only)
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#222]"
              onChange={handleFileChange}
            />
            {fileError && (
              <p className="text-sm text-red-500 mt-2">{fileError}</p>
            )}
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#222]"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#222] text-white px-6 py-2 rounded-lg hover:bg-black transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Career;
