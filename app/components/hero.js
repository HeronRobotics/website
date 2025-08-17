'use client';

import React from 'react';
import Image from 'next/image';
import heron from '../images/heronlogo.png';
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="bg-background text-white flex flex-col items-center justify-center h-screen w-full">
            <div className="flex items-center gap-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.2,
                        staggerChildren: 0.2,
                    }}
                >
                    <Image
                        src={heron}
                        alt="Heron"
                        width={400}
                        height={400}
                        className="mx-auto mb-4"
                    />
                </motion.div>
                <div className="flex flex-col">
                    <motion.div
                        className="text-amber text-9xl font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 0.2,
                            staggerChildren: 0.2,
                        }}
                    >27621</motion.div>
                    <motion.div
                        className="text-lightblue text-6xl font-bold"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 0.5,
                            staggerChildren: 0.2,
                        }}>HERON ROBOTICS</motion.div>
                    <motion.div
                        className="grid grid-cols-2 text-lightblue text-3xl mt-12"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 0.8,
                            staggerChildren: 0.2,
                        }}
                    >
                        <Link href="#about">
                            <motion.p
                                whileHover={{ scale: 1.03 }}
                                className="text-white hover:text-lightblue delay-50"
                            >
                                ABOUT
                            </motion.p>
                        </Link>
                        <Link href="/learn">
                            <motion.p
                                whileHover={{ scale: 1.03 }}
                                className="text-white hover:text-lightblue delay-50"
                            >
                                LEARN
                            </motion.p>
                        </Link>
                        <Link href="/impact">
                            <motion.p
                                whileHover={{ scale: 1.03 }}
                                className="text-white hover:text-lightblue delay-50 mt-8"
                            >
                                IMPACT
                            </motion.p>
                        </Link>
                        <Link href="/contact">
                            <motion.p
                                whileHover={{ scale: 1.03 }}
                                className="text-white hover:text-lightblue delay-50 mt-8"
                            >
                                CONTACT
                            </motion.p>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;