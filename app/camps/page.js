'use client';
import Nav from '../components/Nav';
import Footer from "@/app/components/Footer";

import React from 'react';

const Camps = () => {
    return (
        <div className="bg-background min-h-screen flex flex-col justify-between">
            <div className="flex-grow flex items-center justify-center">
                <div className="container max-w-4xl mx-auto px-6 py-12 bg-white shadow-md rounded-lg">
                    <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
                        About Us
                    </h1>
                    <p className="text-lg text-gray-700 text-center mb-4">
                        Welcome to the official Heron Robotics, Team 27621 website. We are a FIRST Tech Challenge team based in the San Francisco Bay Area. Our team is composed of high school students mainly in Palo Alto.
                    </p>
                    <p className="text-lg text-center font-semibold text-gray-500 mt-8">

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Camps;
