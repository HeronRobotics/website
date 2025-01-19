import React from 'react';
import Image from 'next/image';
import heron from '../images/heronlogo.png';

const Hero = () => {
    return (
        <div className="bg-[gray-200] flex flex-col items-center justify-center h-[80vh] w-full">
            <h1 className="text-5xl text-center w-full mb-2">Heron Robotics</h1>
            <Image
                src={heron}
                alt="Heron"
                width={300}
                height={300}
                className="my-4"
            />
            <h2 className="text-3xl text-center w-full mt-2">FTC Team 27621, based in Palo Alto</h2>
        </div>
    );
};

export default Hero;
