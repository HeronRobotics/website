'use client';

import React from 'react';
import Nav from '../components/Nav';

const Team = () => {
    const coCaptains = [
        { name: 'Gavin', role: 'Co-Captain' },
        { name: 'Vasudha', role: 'Co-Captain' },
    ];

    const leads = [
        { name: 'Arjun', role: 'Outreach Lead' },
        { name: 'Stepan', role: 'Hardware Lead' },
        { name: 'Kevin', role: 'Software Lead' },
    ];

    const members = [
        { name: 'Lucas', role: 'Outreach' },
        { name: 'Nuri', role: 'Outreach' },
        { name: 'Luka', role: 'Hardware' },
        { name: 'Matthew', role: 'Hardware' },
        { name: 'Tomasz', role: 'Software' },
        { name: 'Preston', role: 'Software' },
    ];

    // Combine all the arrays into one
    const team = [...coCaptains, ...leads, ...members];

    return (
        <div className="bg-gray-200 min-h-screen">
            <Nav />
            <div className="container mx-auto py-8">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Our Team
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
                        >
                            <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                                {member.name}
                            </h4>
                            <p className="text-gray-600 text-center">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
