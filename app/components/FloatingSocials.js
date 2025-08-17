'use client';

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function FloatingSocials() {
    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div className="flex items-center gap-4 px-4 py-2 rounded-full border border-gray-400 bg-[#60A5FA] backdrop-blur text-white">
                <a href="https://github.com/HeronRobotics" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub className="hover:text-gray-300" />
                </a>
                <a href="https://www.instagram.com/heron.robotics/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram className="hover:text-gray-300" />
                </a>
                <a href="https://www.linkedin.com/company/heron-robotics/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin className="hover:text-gray-300" />
                </a>
            </div>
        </div>
    );
}
