import React, { useState } from 'react';

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
        setIsSubmitted(true);

        // 2 seconds ke baad wapas blue karne ke liye
        setTimeout(() => setIsSubmitted(false), 2000);
    };

    return (
        <form 
            onSubmit={handleSubmit} 
            className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
        >
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Form : </h2>
            
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Enter text" 
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            
            <button 
                type="submit" 
                className={`mt-4 w-full ${
                    isSubmitted 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-blue-500 hover:bg-blue-600'
                } text-white font-semibold py-2 px-4 rounded-md transition duration-300`}
            >
                {isSubmitted ? 'Submitted ✔️' : 'Submit'}
            </button>
        </form>
    );
};

export default Form;
