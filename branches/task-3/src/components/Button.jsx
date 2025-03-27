import React from 'react';

const Button = () => {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    return (
        <button
            onClick={handleClick}
            className="bg-blue-500 text-white rounded-lg hover:bg-blue-700 px-4 py-2"
        >
            Click Me
        </button>
    );
};

export default Button;