'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import compImg from '@/app/images/comp.png';
// Importing the new logos
import ftcLogoImg from '@/app/images/FTC_logo.png';
import visaLogoImg from '@/app/images/visa.png';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut', delay } }
});

export default function PageHeader({ title = 'About', subtitle = 'Heron Robotics · FTC 27621' }) {
    return (
        <section className="relative w-full min-h-[40vh] bg-background text-white overflow-hidden flex items-center">
            <div className="pointer-events-none absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)] bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>

            <div className="container mx-auto h-full px-6 py-10 md:py-14 relative z-10">
                <div className="flex h-full items-center justify-between gap-6 lg:gap-12">

                    <div className="flex-1 max-w-2xl">
                        <motion.h1
                            className="text-amber text-6xl md:text-7xl font-extrabold leading-none"
                            {...fadeUp(0.05)}
                        >
                            {title}
                        </motion.h1>
                        <motion.p className="mt-3 text-white/80 text-lg md:text-xl" {...fadeUp(0.2)}>
                            {subtitle}
                        </motion.p>
                    </div>

                    <div className="hidden md:flex flex-col gap-4 self-center shrink-0">
                        <motion.div
                            className="relative w-24 h-24 lg:w-28 lg:h-28 bg-white/5 border border-white/10 rounded-xl shadow-lg overflow-hidden p-2"
                            {...fadeUp(0.25)}
                        >
                            <Image
                                src={ftcLogoImg}
                                alt="FTC Logo"
                                fill
                                className="object-contain p-2"
                                sizes="(max-width: 768px) 0vw, 120px"
                            />
                        </motion.div>
                        <motion.div
                            className="relative w-24 h-24 lg:w-28 lg:h-28 bg-white/5 border border-white/10 rounded-xl shadow-lg overflow-hidden p-2"
                            {...fadeUp(0.3)}
                        >
                            <Image
                                src={visaLogoImg}
                                alt="Visa Logo"
                                fill
                                className="object-contain p-2"
                                sizes="(max-width: 768px) 0vw, 120px"
                            />
                        </motion.div>
                    </div>

                    <div className="hidden md:flex flex-col gap-2 w-[45%] max-w-[600px]">
                        <motion.div
                            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-amber/10 border border-white/10"
                            {...fadeUp(0.35)}
                        >
                            <Image
                                src={compImg}
                                alt="Heron Winning Alliance"
                                fill
                                className="object-cover"
                                placeholder="blur"
                                priority={true}
                                sizes="(max-width: 768px) 0vw, 50vw"
                            />
                        </motion.div>
                        <motion.p
                            className="text-xs text-white/80 text-right leading-tight"
                            {...fadeUp(0.4)}
                        >
                            Winning Alliance 27621 Heron Robotics and 23222 Cheesy Chips at The Play Space Qualifying Tournament #5, San Jose, CA 11/23/2025
                        </motion.p>
                    </div>

                </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-20" />
        </section>
    );
}