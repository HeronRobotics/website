import React from 'react';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background px-4">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-lightblue mb-4">
                    Contact Page Under Construction
                </h1>
                <p className="text-lg md:text-xl text-lightgray">
                    We're currently working on this page. Please check back later.
                </p>
            </div>
            <div className="mt-10">
                <svg
                    className="animate-spin h-12 w-12 text-lightblue"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    ></circle>
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default Contact;
