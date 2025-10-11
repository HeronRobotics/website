'use client';

import React from 'react';
import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";
import { IoChevronBack } from "react-icons/io5";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut', delay },
    },
});

const stagger = {
    initial: {},
    animate: {
        transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
};

const Impact = () => {
    return (
        <div className="bg-background min-h-screen flex items-center justify-center py-12 px-4">
            <div className="container max-w-6xl rounded-lg overflow-hidden">
                {/* Hero / Heading */}
                <motion.div
                    variants={fadeUp(0.05)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                    className="p-8"
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
                        variants={fadeUp(0.1)}
                    >
                        Our Impact
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-white text-center mb-8"
                        variants={fadeUp(0.2)}
                    >
                        How we're giving back to the community.
                    </motion.p>
                </motion.div>

                {/* Cards Masonry */}
                <motion.div
                    variants={stagger}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.15 }}
                    className="p-8"
                >
                    <div className="columns-1 sm:columns-2 md:columns-3 gap-6 mx-auto">
                        <motion.div variants={fadeUp(0.05)}>
                            <Card className="bg-[#286CBD] rounded-lg shadow-lg break-inside-avoid mb-6 hover:scale-105 transition-transform duration-300">
                                <CardHeader className="text-center">
                                    <h2 className="text-2xl font-bold text-white">
                                        FLL Camps and LEGO EV3 Classes
                                    </h2>
                                </CardHeader>
                                <CardBody className="text-center">
                                    <p className="mt-2 text-white">
                                        Teaching children of all ages about FLL and an introduction to FIRST, as well as solving challenges using EV3 robots.
                                    </p>
                                </CardBody>
                                <CardFooter className="flex flex-col border-t border-white pt-4">
                                    <h2 className="font-bold text-2xl text-amber">20+</h2>
                                    <p className="text-white">students reached</p>
                                </CardFooter>
                            </Card>
                        </motion.div>

                        <motion.div variants={fadeUp(0.08)}>
                            <Card className="bg-[#286CBD] rounded-lg shadow-lg break-inside-avoid mb-6 hover:scale-105 transition-transform duration-300">
                                <CardHeader className="text-center">
                                    <h2 className="text-2xl font-bold text-white">Hawk Gaming</h2>
                                </CardHeader>
                                <CardBody className="text-center">
                                    <p className="mt-2 text-white">
                                        Presented at the Hawk Gaming event and gathered interest in FIRST through
                                    </p>
                                </CardBody>
                                <CardFooter className="flex flex-col border-t border-white pt-4">
                                    <h2 className="font-bold text-2xl text-amber">1000+</h2>
                                    <p className="text-white">potential participants</p>
                                </CardFooter>
                            </Card>
                        </motion.div>

                        <motion.div variants={fadeUp(0.11)}>
                            <Card className="bg-[#286CBD] rounded-lg shadow-lg break-inside-avoid mb-6 hover:scale-105 transition-transform duration-300">
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
                        </motion.div>

                        <motion.div variants={fadeUp(0.14)}>
                            <Card className="bg-[#286CBD] rounded-lg shadow-lg break-inside-avoid mb-6 hover:scale-105 transition-transform duration-300">
                                <CardHeader className="text-center">
                                    <h2 className="text-2xl font-bold text-white">Los Angeles Toys CAD</h2>
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
                        </motion.div>

                        <motion.div variants={fadeUp(0.17)}>
                            <Card className="bg-[#286CBD] rounded-lg shadow-lg break-inside-avoid mb-6 hover:scale-105 transition-transform duration-300">
                                <CardHeader className="text-center">
                                    <h2 className="text-2xl font-bold text-white">FIRST Lego League Mentorship</h2>
                                </CardHeader>
                                <CardBody className="text-center">
                                    <p className="mt-2 text-white">
                                        Mentoring and guiding FLL teams all around the Bay Area to success.
                                    </p>
                                </CardBody>
                                <CardFooter className="flex flex-col border-t border-white pt-4">
                                    <h2 className="font-bold text-2xl text-amber">5</h2>
                                    <p className="text-white">teams created</p>
                                    <h2 className="font-bold text-2xl mt-4 text-amber">20+</h2>
                                    <p className="text-white">teams mentored</p>
                                </CardFooter>
                            </Card>
                        </motion.div>

                        <motion.div variants={fadeUp(0.2)}>
                            <Card className="bg-[#286CBD] rounded-lg shadow-lg break-inside-avoid mb-6 hover:scale-105 transition-transform duration-300">
                                <CardHeader className="text-center">
                                    <h2 className="text-2xl font-bold text-white">Fundraising</h2>
                                </CardHeader>
                                <CardBody className="text-center">
                                    <p className="mt-2 text-white">
                                        Biweekly bake sales and camp fees to support our season's costs as well as outreach events. Partnered with Yogurtland, Chipotle, etc.
                                    </p>
                                </CardBody>
                                <CardFooter className="flex flex-col border-t border-white pt-4">
                                    <h2 className="font-bold text-2xl text-amber">Over $2,000</h2>
                                    <p className="text-white">raised</p>
                                </CardFooter>
                            </Card>
                        </motion.div>

                        <motion.div variants={fadeUp(0.23)}>
                            <Card className="bg-[#286CBD] rounded-lg shadow-lg break-inside-avoid mb-6 hover:scale-105 transition-transform duration-300">
                                <CardHeader className="text-center">
                                    <h2 className="text-2xl font-bold text-white">Robot Showcase</h2>
                                </CardHeader>
                                <CardBody className="text-center">
                                    <p className="mt-2 text-white">
                                        Brought 2024 robot to libraries and businesses around the Bay Area to garner interest in engineering and FIRST. Many of these showcases impacted at-risk and underprivileged youth.
                                    </p>
                                </CardBody>
                                <CardFooter className="flex flex-col border-t border-white pt-4">
                                    <h2 className="font-bold text-2xl text-amber">200+</h2>
                                    <p className="text-white">children and youth reached</p>
                                </CardFooter>
                            </Card>
                        </motion.div>

                        <motion.div variants={fadeUp(0.26)}>
                            <Card className="bg-[#286CBD] rounded-lg shadow-lg break-inside-avoid mb-6 hover:scale-105 transition-transform duration-300">
                                <CardHeader className="text-center">
                                    <h2 className="text-2xl font-bold text-white">Rival Robotics Photography</h2>
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
                        </motion.div>

                        <motion.div variants={fadeUp(0.29)}>
                            <Card className="bg-[#286CBD] rounded-lg shadow-lg break-inside-avoid mb-6 hover:scale-105 transition-transform duration-300">
                                <CardHeader className="text-center">
                                    <h2 className="text-2xl font-bold text-white">Engineering Competition</h2>
                                </CardHeader>
                                <CardBody className="text-center">
                                    <p className="mt-2 text-white">
                                        Creating challenges for underprivileged kids around the Bay Area to solve using engineering concepts.
                                    </p>
                                </CardBody>
                                <CardFooter className="flex flex-col border-t border-white pt-4">
                                    <h2 className="font-bold text-2xl text-amber">100+</h2>
                                    <p className="text-white">potential competitors</p>
                                </CardFooter>
                            </Card>
                        </motion.div>

                        <motion.div variants={fadeUp(0.32)}>
                            <Card className="bg-[#286CBD] rounded-lg shadow-lg break-inside-avoid mb-6 hover:scale-105 transition-transform duration-300">
                                <CardHeader className="text-center">
                                    <h2 className="text-2xl font-bold text-white">FRC Mentorship</h2>
                                </CardHeader>
                                <CardBody className="text-center">
                                    <p className="mt-2 text-white">
                                        Mentoring several teams around the FRC Bay Area community.
                                    </p>
                                </CardBody>
                                <CardFooter className="flex flex-col border-t border-white pt-4">
                                    <h2 className="font-bold text-2xl text-amber">5+</h2>
                                    <p className="text-white">teams mentored</p>
                                </CardFooter>
                            </Card>
                        </motion.div>

                        <motion.div variants={fadeUp(0.35)}>
                            <Card className="bg-[#286CBD] rounded-lg shadow-lg break-inside-avoid mb-6 hover:scale-105 transition-transform duration-300">
                                <CardHeader className="text-center">
                                    <h2 className="text-2xl font-bold text-white">Team Training</h2>
                                </CardHeader>
                                <CardBody className="text-center">
                                    <p className="mt-2 text-white">
                                        Created an extensive hardware, software, and FLL training curriculum for our team and the teams we mentored.
                                    </p>
                                </CardBody>
                                <CardFooter className="flex flex-col border-t border-white pt-4">
                                    <h2 className="font-bold text-2xl text-amber">200+</h2>
                                    <p className="text-white">hours spent learning</p>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={fadeUp(0.1)}
                        className="mt-10 flex justify-center"
                    >
                        <Link
                            href="/"
                            className="group inline-flex items-center justify-center gap-2 px-5 py-2.5
              rounded-full border border-white/15 bg-white/5 text-white text-lg font-semibold
              backdrop-blur transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] hover:border-white/30"
                        >
                            <IoChevronBack
                                size={22}
                                className="text-lightblue transition-transform group-hover:-translate-x-1"
                            />
                            Back
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Impact;
