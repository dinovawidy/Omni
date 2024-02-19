import React, { useState } from 'react';

const SearchInput = ({ value, placeholder, onInputChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`p-2 col-md-3 mb-5 transition duration-300`}>
      <input
        type="text"
        value={value}
        placeholder={placeholder || "Search..."}
        className={`p-3 font-sans border text-zinc-400 rounded-lg form-input focus:outline-none ${isFocused ? 'focus: ring-2' : ''}`}
        onChange={(e) => onInputChange && onInputChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default SearchInput;