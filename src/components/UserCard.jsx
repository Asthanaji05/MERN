import React from 'react';

const UserCard = ({ name, email }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">User Card: </h2>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">{email}</p>
            </div>
        </div>
    );
};

export default UserCard;