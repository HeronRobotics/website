import React from 'react';
import Image from 'next/image';
import { IoChevronBack } from "react-icons/io5";
import Link from "next/link";

// Import each image as a module
import teamImage from '../images/27621team.png';
import gavinImg from '../images/gavin.png';
import vasudhaImg from '../images/vasudha.png';
import prestonImg from '../images/preston.png';
import stepanImg from '../images/stepan.png';
import kevinImg from '../images/kevin.png';
import lucasImg from '../images/lucas.png';
import nuriImg from '../images/nuri.png';
import matthewImg from '../images/matthew.png';
import lukaImg from '../images/luka.png';
import arjunImg from '../images/arjun.png';
import tomaszImg from '../images/tomasz.png';

import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";

const About = () => {
    const team = [
        { name: 'Gavin',   role: 'Co-Captain',     image: gavinImg,   quote: 'it’s a software issue' },
        { name: 'Vasudha', role: 'Co-Captain',     image: vasudhaImg, quote: 'baja blast pls' },
        { name: 'Preston', role: 'Outreach Lead',  image: prestonImg, quote: 'when is lucas coming' },
        { name: 'Stepan',  role: 'Hardware Lead',  image: stepanImg,  quote: 'there’s no way fusion crashed again' },
        { name: 'Kevin',   role: 'Software Lead',  image: kevinImg,   quote: 'Not very scintillating' },
        { name: 'Lucas',   role: 'Outreach',       image: lucasImg,   quote: 'what is a drivetrain' },
        { name: 'Nuri',    role: 'Outreach',       image: nuriImg,    quote: 'this robot is looking kinda halal right now' },
        { name: 'Matthew', role: 'Outreach',       image: matthewImg, quote: 'can we get the doordash order started?' },
        { name: 'Luka',    role: 'Outreach',       image: lukaImg,    quote: 'if I had a nickel for every time gavin overslept I would be very rich' },
        { name: 'Arjun',   role: 'Hardware',       image: arjunImg,   quote: 'it will be done soon' },
        { name: 'Tomasz',  role: 'Software',       image: tomaszImg,  quote: 'please let it be a hardware issue' },
    ];

    return (
        <div className="bg-background min-h-screen flex flex-col justify-center items-center">
            <div className="container max-w-6xl bg-white shadow-md rounded-lg overflow-hidden my-8">
                <div className="w-full h-[50vh] relative">
                    <Image
                        src={teamImage}
                        alt="Team"
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                    />
                </div>

                <div className="p-8">
                    <h1 className="text-5xl font-bold text-center text-gray-900 mb-6">
                        ABOUT US
                    </h1>
                    <p className="text-xl text-gray-800 text-center">
                        We&apos;re a rookie team of 11 members from Palo Alto, California, dedicated to inclusion and
                        innovation. Founded to promote collaboration and a healthy environment within our team and the
                        FIRST community, we combine our diverse talents to ensure everyone is heard. We are committed to
                        providing accessible resources and learning opportunities to empower the FIRST community. The
                        heron, symbolizing self-determination and growth, reflects our aspirations to reach our highest
                        potential.
                    </p>
                </div>

                <div className="bg-white">
                    <div className="container mx-auto py-8">
                        <h2 className="text-5xl font-bold text-center mb-8 text-gray-900">
                            OUR TEAM
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            {team.map((member, index) => (
                                <Card
                                    key={index}
                                    className="bg-background rounded-lg shadow-lg w-64"
                                >
                                    <CardHeader className="flex justify-center">
                                        <img
                                            src={member.image.src}
                                            alt={member.name}
                                            className="w-24 h-24 rounded-full"
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <h4 className="text-xl font-semibold text-white text-center">
                                            {member.name}
                                        </h4>
                                        <p className="text-gray-100 text-center">{member.role}</p>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <p className="text-sm text-gray-200">{member.quote}</p>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
                <Link
                    href="/"
                    className="text-lg text-center font-semibold text-gray-700 my-8 flex items-center justify-center gap-1.5"
                >
                    <IoChevronBack size={25} className="mb-0.5" />
                    Back
                </Link>
            </div>
        </div>
    );
};

export default About;
