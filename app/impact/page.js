import React from 'react';
import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";
import {IoChevronBack} from "react-icons/io5";
import Link from "next/link";

const Impact = () => {
    return (
        <div className="bg-background min-h-screen flex items-center justify-center py-12 px-4">
            <div className="container max-w-6xl bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-black text-center mb-4">
                        Our Impact
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 text-center mb-8">
                        How we're giving back to the community.
                    </p>
                </div>
                <div className="p-8">
                    <div className="columns-1 sm:columns-2 md:columns-3 gap-6 mx-auto">
                        <Card className="bg-background rounded-lg shadow-lg break-inside-avoid mb-6 hover:scale-105 transition-transform duration-300">
                            <CardHeader className="text-center">
                                <h2 className="text-2xl font-bold text-white">
                                    Hosting Classes and Makerspace Opportunities
                                </h2>
                            </CardHeader>
                            <CardBody className="text-center">
                                <p className="mt-2 text-white">
                                    Creating STEAM workshops and opportunities for youth through coding, robotics, and fabrication projects. Our workshop is open at any time for local kids to use our vital tools and machines.
                                </p>
                            </CardBody>
                            <CardFooter className="flex flex-col border-t border-white pt-4">
                                <h2 className="font-bold text-2xl text-amber">50+</h2>
                                <p className="text-white">students reached</p>
                            </CardFooter>
                        </Card>
                        <Card className="bg-background rounded-lg shadow-lg break-inside-avoid mb-6 hover:scale-105 transition-transform duration-300">
                            <CardHeader className="text-center">
                                <h2 className="text-2xl font-bold text-white">
                                    Hawk Gaming
                                </h2>
                            </CardHeader>
                            <CardBody className="text-center">
                                <p className="mt-2 text-white">
                                    Presenting at the Hawk Gaming event to showcase our team and the FIRST program, as well as hosting a workshop to engage the community in robotics.
                                </p>
                            </CardBody>
                            <CardFooter className="flex flex-col border-t border-white pt-4">
                                <h2 className="font-bold text-2xl text-amber">1000+</h2>
                                <p className="text-white">potential participants</p>
                            </CardFooter>
                        </Card>
                        <Card className="bg-background rounded-lg shadow-lg break-inside-avoid mb-6 hover:scale-105 transition-transform duration-300">
                            <CardHeader className="text-center">
                                <h2 className="text-2xl font-bold text-white">
                                    Western Regional Robotics Forum Conference
                                </h2>
                            </CardHeader>
                            <CardBody className="text-center">
                                <p className="mt-2 text-white">
                                    Spoke at the WRRF conference to share our team's journey and inspire other teams to give back to their communities.
                                </p>
                            </CardBody>
                            <CardFooter className="flex flex-col border-t border-white pt-4">
                                <h2 className="font-bold text-2xl text-amber">200+</h2>
                                <p className="text-white">FIRST students and mentors</p>
                            </CardFooter>
                        </Card>
                        <Card className="bg-background rounded-lg shadow-lg break-inside-avoid mb-6 hover:scale-105 transition-transform duration-300">
                            <CardHeader className="text-center">
                                <h2 className="text-2xl font-bold text-white">
                                    Santa Clara Downtown Youth Center EV3 Camp
                                </h2>
                            </CardHeader>
                            <CardBody className="text-center">
                                <p className="mt-2 text-white">
                                    Engaging tens of at-risk and underprivileged youth in a deep dive into robotics and STEAM.
                                </p>
                            </CardBody>
                            <CardFooter className="flex flex-col border-t border-white pt-4">
                                <h2 className="font-bold text-2xl text-amber">20+</h2>
                                <p className="text-white">potential students</p>
                            </CardFooter>
                        </Card>
                        <Card className="bg-background rounded-lg shadow-lg break-inside-avoid mb-6 hover:scale-105 transition-transform duration-300">
                            <CardHeader className="text-center">
                                <h2 className="text-2xl font-bold text-white">
                                    Los Angeles Toys CAD
                                </h2>
                            </CardHeader>
                            <CardBody className="text-center">
                                <p className="mt-2 text-white">
                                    To help children that lost their toys in the LA fires, we printed them new toys using CAD files.
                                </p>
                            </CardBody>
                            <CardFooter className="flex flex-col border-t border-white pt-4">
                                <h2 className="font-bold text-2xl text-amber">30+</h2>
                                <p className="text-white">toys printed</p>
                            </CardFooter>
                        </Card>
                        <Card className="bg-background rounded-lg shadow-lg break-inside-avoid mb-6 hover:scale-105 transition-transform duration-300">
                            <CardHeader className="text-center">
                                <h2 className="text-2xl font-bold text-white">
                                    FIRST Lego League Mentorship
                                </h2>
                            </CardHeader>
                            <CardBody className="text-center">
                                <p className="mt-2 text-white">
                                    Mentoring and guiding FLL teams all around the Bay Area to success.
                                </p>
                            </CardBody>
                            <CardFooter className="flex flex-col border-t border-white pt-4">
                                <h2 className="font-bold text-2xl text-amber">10+</h2>
                                <p className="text-white">teams mentored</p>
                            </CardFooter>
                        </Card>
                        <Card className="bg-background rounded-lg shadow-lg break-inside-avoid mb-6 hover:scale-105 transition-transform duration-300">
                            <CardHeader className="text-center">
                                <h2 className="text-2xl font-bold text-white">
                                    India Workshop
                                </h2>
                            </CardHeader>
                            <CardBody className="text-center">
                                <p className="mt-2 text-white">
                                    A workshop in July 2025 to teach robotics and coding to underprivileged children in India through a two-week comprehensive curriculum.
                                </p>
                            </CardBody>
                            <CardFooter className="flex flex-col border-t border-white pt-4">
                                <h2 className="font-bold text-2xl text-amber">50+</h2>
                                <p className="text-white">children impacted</p>
                            </CardFooter>
                        </Card>
                        <Card className="bg-background rounded-lg shadow-lg break-inside-avoid mb-6 hover:scale-105 transition-transform duration-300">
                            <CardHeader className="text-center">
                                <h2 className="text-2xl font-bold text-white">
                                    Fast Food Partnership Fundraiser
                                </h2>
                            </CardHeader>
                            <CardBody className="text-center">
                                <p className="mt-2 text-white">
                                    Partnership with Chipotle to raise funds for our team and bring our local community together.
                                </p>
                            </CardBody>
                            <CardFooter className="flex flex-col border-t border-white pt-4">
                                <h2 className="font-bold text-2xl text-amber">In progress</h2>
                                <p className="text-white"></p>
                            </CardFooter>
                        </Card>
                        <Card className="bg-background rounded-lg shadow-lg break-inside-avoid mb-6 hover:scale-105 transition-transform duration-300">
                            <CardHeader className="text-center">
                                <h2 className="text-2xl font-bold text-white">
                                    Rival Robotics Photography
                                </h2>
                            </CardHeader>
                            <CardBody className="text-center">
                                <p className="mt-2 text-white">
                                    Photographed and documented the journey of several FRC teams, showcasing the process of building and competing.
                                </p>
                            </CardBody>
                            <CardFooter className="flex flex-col border-t border-white pt-4">
                                <h2 className="font-bold text-2xl text-amber">10+</h2>
                                <p className="text-white">teams documented</p>
                            </CardFooter>
                        </Card>
                        <Card className="bg-background rounded-lg shadow-lg break-inside-avoid mb-6 hover:scale-105 transition-transform duration-300">
                            <CardHeader className="text-center">
                                <h2 className="text-2xl font-bold text-white">
                                    Scrimmage Hosting
                                </h2>
                            </CardHeader>
                            <CardBody className="text-center">
                                <p className="mt-2 text-white">
                                    Hosting FTC scrimmages around the Bay Area in collaboration with Bellarmine to extend the season.
                                </p>
                            </CardBody>
                            <CardFooter className="flex flex-col border-t border-white pt-4">
                                <h2 className="font-bold text-2xl text-amber">30+</h2>
                                <p className="text-white">teams impacted</p>
                            </CardFooter>
                        </Card>
                        <Card className="bg-background rounded-lg shadow-lg break-inside-avoid mb-6 hover:scale-105 transition-transform duration-300">
                            <CardHeader className="text-center">
                                <h2 className="text-2xl font-bold text-white">
                                    FRC Truck Organization Service
                                </h2>
                            </CardHeader>
                            <CardBody className="text-center">
                                <p className="mt-2 text-white">
                                    Handling logistics and FRC truck shipping for teams around the world.
                                </p>
                            </CardBody>
                            <CardFooter className="flex flex-col border-t border-white pt-4">
                                <h2 className="font-bold text-2xl text-amber">In progress</h2>
                                <p className="text-white"></p>
                            </CardFooter>
                        </Card>
                        <Card className="bg-background rounded-lg shadow-lg break-inside-avoid mb-6 hover:scale-105 transition-transform duration-300">
                            <CardHeader className="text-center">
                                <h2 className="text-2xl font-bold text-white">
                                    Servo Manufacturing
                                </h2>
                            </CardHeader>
                            <CardBody className="text-center">
                                <p className="mt-2 text-white">
                                    Creating a better and cheaper version of the Axon Mini class servo for the FTC community.
                                </p>
                            </CardBody>
                            <CardFooter className="flex flex-col border-t border-white pt-4">
                                <h2 className="font-bold text-2xl text-amber">In progress</h2>
                                <p className="text-white"></p>
                            </CardFooter>
                        </Card>
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
        </div>
    );
};

export default Impact;
