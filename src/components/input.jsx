import React from "react";

const input = () => {
  return (
    <div className="absolute py-16">
      <div className="w-56 relative group">
        <input
          type="text"
          id="username"
          required
          className="w-full h-10 px-4 text-sm peer bg-gray-100 outline-none"
        />
        <label
          for="username"
          className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
        >
          Username
        </label>
      </div>
    </div>
  );
};

export default input;
