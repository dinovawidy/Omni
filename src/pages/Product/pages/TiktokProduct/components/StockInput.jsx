import React, { useState, useEffect } from "react";

const StockInput = ({ value, onChange }) => {
    const [inputValue, setInputValue] = useState(value);
    const [debouncedValue, setDebouncedValue] = useState(value);

    const debounce = (value, delay) => {
        setTimeout(() => setDebouncedValue(value), delay);
    };

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (value !== debouncedValue) {
                onChange(debouncedValue);
            }
        }, 1000);

        return () => clearTimeout(timerId);
    }, [debouncedValue, onChange]);

    const handleChange = (e) => {
        const newInputValue = e.target.value;
        setInputValue(newInputValue);

        // Debounce the value after 1 second
        debounce(newInputValue, 200);
    };

    return (
        <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            onFocus={(e) => {
                e.target.select();
            }}
            className="text-right px-3 py-2 bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-300 sm:text-sm"
        />
    );
};

export default StockInput;
