import React, { useState } from 'react';

const TextUpdater = () => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
  <h2 className="text-2xl font-semibold text-blue-500 mb-4">Text Updater</h2>
  <input
    type="text"
    value={text}
    onChange={handleChange}
    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="Type something..."
  />
  <p className="mt-4 text-gray-700 text-lg">{text}</p>
</div>

    );
};

export default TextUpdater;