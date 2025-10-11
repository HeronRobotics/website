'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import heron from '../images/heronlogo.png';
import gavin from '../images/gavin.png';
import PageHeader from '@/app/components/PageHeader';

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay } },
});

export default function AboutPage() {
    return (
        <main className="bg-background text-white min-h-screen w-full">
            <PageHeader title="About" subtitle="Heron Robotics · FTC 27621" />

            <section className="container mx-auto px-6 mt-12 md:mt-16">
                <motion.h3
                    className="text-lightblue text-2xl font-semibold"
                    variants={fadeUp(0.1)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    Our team
                </motion.h3>

                <motion.div
                    className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
                    variants={fadeUp(0.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <StatCard label="Founded" value="2024" />
                    <StatCard label="Members" value="12" />
                    <StatCard label="Total Hours per Week" value="300+" />
                    <StatCard label="Awards" value="Inspire 2 / Design" />
                </motion.div>
            </section>

            <section className="container mx-auto px-6 mt-12 md:mt-16">
                <motion.h3
                    className="text-lightblue text-2xl font-semibold"
                    variants={fadeUp(0.1)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    Who we are
                </motion.h3>

                <motion.p
                    className="mt-4 max-w-3xl text-white/90"
                    variants={fadeUp(0.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    Heron Robotics is a student-run team based in Palo Alto. We encompass all aspects of FIRST,
                    from high-level robot design and efficient software to reaching out and impacting our local
                    community. We have experienced members in FIRST and are heading into our second year of
                    competition in FTC, where we are aiming to win the world championship.
                </motion.p>
            </section>

            <section className="container mx-auto px-6 mt-12 md:mt-16">
                <motion.h3
                    className="text-lightblue text-2xl font-semibold"
                    variants={fadeUp(0.1)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    Our values
                </motion.h3>

                <motion.div
                    className="mt-6 grid gap-4 md:grid-cols-2"
                    variants={fadeUp(0.2)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <ValueCard
                        title="Innovation"
                        desc="With a box tube design and over 2500+ iterations in our INTO THE DEEP season, we look to maximizing robot efficiency
            while also inspiring other teams to come up with their own ideas."
                    />
                    <ValueCard
                        title="Inclusion"
                        desc="We've impacted hundreds of kids in one season through outreach events such as robot showcases and free camps
            in underdeveloped areas, in just one season. We're committed to equality in engineering."
                    />
                    <ValueCard
                        title="Collaboration"
                        desc="We've collaborated with local organizations such as allcove and Hawk Gaming on events that improve
            community wellness and interest in STEAM."
                    />
                    <ValueCard
                        title="Leadership"
                        desc="Each member on our team, whether hardware, software, or outreach, has a chance to improve their leadership skills
            through mentoring and collaboration."
                    />
                </motion.div>
            </section>

            <section className="container mx-auto px-6 mt-12 md:mt-16">
                <motion.h3
                    className="text-lightblue text-2xl font-semibold"
                    variants={fadeUp(0.1)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    Our robot
                </motion.h3>

                {/*
        <motion.div
          className="mt-6 grid gap-6 md:grid-cols-2"
          variants={fadeUp(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="rounded-2xl border border-white/15 p-5">
            <h4 className="text-amber font-semibold text-lg">Subsystems</h4>
            <ul className="mt-3 space-y-2 text-white/90 list-disc list-inside">
              <li>gavin zhang</li>
              <Image
                src={gavin}
                alt="gz"
                width={400}
                height={400}
                className="mx-auto mb-4"
              />
            </ul>
          </div>

          <div className="rounded-2xl border border-white/15 p-5">
            <h4 className="text-amber font-semibold text-lg">Software</h4>
            <ul className="mt-3 space-y-2 text-white/90 list-disc list-inside">
              <li>boris nezlobin</li>
            </ul>
          </div>
        </motion.div>
        */}
            </section>

            <section className="container mx-auto px-6 mt-12 md:mt-16 mb-20">
                <motion.div
                    className="rounded-2xl border border-white/15 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                    variants={fadeUp(0.1)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div>
                        <h4 className="text-amber text-xl font-semibold">Contact us</h4>
                        <p className="text-white/90 mt-1">
                            Interested in FIRST, sponsoring, or hosting an event with us? We'd love to connect for a quick chat.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Link
                            href="/contact"
                            className="px-5 py-2 rounded-full bg-lightblue text-white font-semibold hover:opacity-90 transition"
                        >
                            Contact Us
                        </Link>
                    </div>
                </motion.div>
            </section>

            <motion.div
                variants={fadeUp(0.25)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                className="container mx-auto px-6 pb-4"
            >
                <Link
                    href="/"
                    className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur hover:bg-white/10 transition"
                    aria-label="Back to Home"
                >
                    <span className="text-lightblue transition-transform group-hover:-translate-x-0.5">←</span>
                    <span>Back Home</span>
                </Link>
            </motion.div>
        </main>
    );
}

function StatCard({ label, value }) {
    return (
        <div className="rounded-2xl border border-white/15 p-5">
            <div className="text-white/60 text-sm">{label}</div>
            <div className="text-2xl font-bold mt-1">{value}</div>
        </div>
    );
}

function ValueCard({ title, desc }) {
    return (
        <div className="rounded-2xl border border-white/15 p-5">
            <div className="text-amber font-semibold text-lg">{title}</div>
            <p className="mt-2 text-white/90">{desc}</p>
        </div>
    );
}
