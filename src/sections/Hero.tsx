'use client';

import { motion } from 'framer-motion';

import styles from '@/styles/index';

import { slideIn, staggerContainer, textVariant } from '@/utils/motion';
import TypingEffect from '@/components/Typical';

import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6 mt-24`} id="inicio">
        <motion.div
            variants={staggerContainer(0.2, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
            <div className="flex justify-center items-center flex-col relative z-10 h-20">
                <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
                    Vitor Nogueira
                    {/* <TypingEffect /> */}
                </motion.h1>

            </div>

            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="relative w-full md:-mt-[20px] -mt-[12px] bg-"
            >
                <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px] bg-slate-600" />
                <Image
                    src="/profile-color.png"
                    alt="photo profile color"
                    className="w-50 sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative rounded-bl-[140px]"
                    width={500}
                    height={500}
                />
            </motion.div>
        </motion.div>
    </section>
);

export default Hero;
