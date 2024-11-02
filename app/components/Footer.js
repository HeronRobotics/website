import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="py-8 bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <Link href="/about">
                            <p className="text-gray-400 hover:text-white">About</p>
                        </Link>
                        <Link href="/team">
                            <p className="text-gray-400 hover:text-white">Team</p>
                        </Link>
                        <Link href="/sponsors">
                            <p className="text-gray-400 hover:text-white">Sponsors</p>
                        </Link>
                        <Link href="mailto:heronroboticsteam@gmail.com">
                            <p className="text-gray-400 hover:text-white">Contact</p>
                        </Link>
                    </div>
                    <div className="flex space-x-6">
                        <a
                            href="https://www.instagram.com/heron.robotics/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white"
                            aria-label="Heron Robotics Instagram"
                        >
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
                <p className="text-gray-400 text-center mt-6">
                    &copy; {new Date().getFullYear()} Heron Robotics 27621. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
