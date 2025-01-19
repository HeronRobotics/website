'use client';
import Nav from '../components/Nav';
import Footer from "@/app/components/Footer";

import React from 'react';

const Camps = () => {
    return (
        <div className="bg-gray-200 min-h-screen flex flex-col justify-between">
            <Nav />
            <div className="flex-grow flex items-center justify-center">
                <div className="container max-w-4xl mx-auto px-6 py-12 bg-white shadow-md rounded-lg">
                    <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
                        Camps
                    </h1>
                    <p className="text-lg text-gray-700 text-center mb-4">
                        None at the moment...
                    </p>
                    <p className="text-lg text-center font-semibold text-gray-500 mt-8">

                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Camps;
