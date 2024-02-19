import React, { useState, useEffect } from "react";
import GeneralUtility from "../../../../../utils/general-utility";

const CurrencyInput = ({ value, onChange }) => {
    const [formattedValue, setFormattedValue] = useState(value);
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
        const inputValue = e.target.value.replace(/\D/g, "");
        const formattedInputValue = GeneralUtility.formatCurrency(inputValue);
        setFormattedValue(formattedInputValue);

        // Debounce the value after 1 second
        debounce(formattedInputValue, 400);
    };

    return (
        <input
            type="text"
            value={formattedValue}
            onChange={handleChange}
            onFocus={(e) => {
                e.target.select();
            }}
            className="text-right px-3 py-2 bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-300 sm:text-sm"
        />
    );
};

export default CurrencyInput;
