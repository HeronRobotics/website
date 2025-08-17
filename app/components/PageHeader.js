'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut', delay } }
});

export default function PageHeader({ title = 'About', subtitle = 'Heron Robotics · FTC 27621' }) {
    return (
        <section className="relative w-full min-h-[32vh] bg-background text-white overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)] bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="container mx-auto h-full px-6 py-10 md:py-14 relative">
                <div className="flex h-full items-center justify-between gap-6">
                    <div className="max-w-3xl">
                        <motion.h1
                            className="text-amber text-6xl md:text-7xl font-extrabold leading-none"
                            {...fadeUp(0.05)}
                        >
                            {title}
                        </motion.h1>
                        <motion.p className="mt-3 text-white/80" {...fadeUp(0.2)}>
                            {subtitle}
                        </motion.p>
                    </div>
                </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </section>
    );
}
