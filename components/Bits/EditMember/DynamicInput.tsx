


import React, { useState, ChangeEvent, useEffect } from 'react';

interface DynamicWidthInputProps {
  label: string;
  placeholder?: string;
}

const DynamicWidthInput: React.FC<DynamicWidthInputProps> = ({ label, placeholder = '' }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputWidth, setInputWidth] = useState<number | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    // Create an invisible span to measure text width
    const span = document.createElement('span');
    span.textContent = inputValue || placeholder;
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    document.body.appendChild(span);

    // Measure the width and set it in state
    setInputWidth(span.offsetWidth);

    // Clean up the span element
    document.body.removeChild(span);
  }, [inputValue, placeholder]);

  const inputStyle = {
    width: `${Math.min((inputWidth || 0) + 40, 500)}px`, // Use the measured width
  };

  return (
    <div className="py-1 m-0">
      <label className="inline-block w-32">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="bg-gray-300 px-3 mx-2 rounded placeholder-black focus:bg-background   focus-selected:border-accent  border-gray-300"
        style={inputStyle}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default DynamicWidthInput;
