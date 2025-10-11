'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { IoChevronBack } from 'react-icons/io5';
import { Card, CardBody } from '@heroui/card';
import Image from 'next/image';

import allcove from '../images/outreach/allcove.png';
import bakesale from '../images/outreach/bakesale.png';
import fllcamp from '../images/outreach/fllcamp.png';
import hawkgaming from '../images/outreach/hawkgaming.png';
import teambonding from '../images/outreach/teambonding.png';
import teamdiscussion from '../images/outreach/teamdiscussion.png';

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
    animate: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};

const photos = [
    { src: allcove, alt: 'Allcove showcase', caption: 'Allcove showcase' },
    { src: bakesale, alt: 'Bake Sale fundraiser', caption: 'Bake sale fundraiser' },
    { src: fllcamp, alt: 'FLL Camp outreach', caption: 'FLL camp and LEGO robotics' },
    { src: hawkgaming, alt: 'Hawk Gaming event', caption: 'Hawk Gaming speaker event' },
    { src: teambonding, alt: 'Team bonding activity', caption: 'Team bonding' },
    { src: teamdiscussion, alt: 'Team discussion', caption: 'Team discussion' },
];

export default function PhotoBoothPage() {
    return (
        <main className="bg-background min-h-screen text-white">
            <motion.section
                variants={fadeUp(0.05)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                className="container mx-auto px-6 pt-12 pb-2"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-center">Photobooth</h1>
                <p className="text-xl text-white/80 text-center mt-2">
                    A compilation of our moments.
                </p>
            </motion.section>

            <motion.section
                variants={stagger}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.15 }}
                className="container mx-auto px-6 pb-14"
            >
                <div className="mt-6 columns-1 sm:columns-2 md:columns-3 gap-6">
                    {photos.map((p, i) => (
                        <motion.div
                            key={`${p.alt}-${i}`}
                            variants={fadeUp(0.05 + i * 0.02)}
                            className="break-inside-avoid mb-6"
                        >
                            <Card className="bg-[#286CBD] rounded-lg shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                                {/* Static import -> use Next/Image (width/height auto) */}
                                <Image
                                    src={p.src}
                                    alt={p.alt}
                                    className="w-full h-auto object-cover"
                                    placeholder="blur"
                                    sizes="(min-width: 768px) 33vw, 50vw"
                                />

                                <div className="border-t border-white/30 mx-5 my-3" />
                                <CardBody className="pt-0 pb-4 px-5">
                                    <h3 className="text-white font-semibold">{p.caption || p.alt}</h3>
                                </CardBody>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div variants={fadeUp(0.1)} className="mt-10 flex justify-center">
                    <Link
                        href="/"
                        className="group inline-flex items-center justify-center gap-2 px-5 py-2.5
                       rounded-full border border-white/15 bg-white/5 text-white text-lg font-semibold
                       backdrop-blur transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] hover:border-white/30"
                    >
                        <IoChevronBack size={22} className="text-lightblue transition-transform group-hover:-translate-x-1" />
                        Back to Home
                    </Link>
                </motion.div>
            </motion.section>
        </main>
    );
}
