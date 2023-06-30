'use client';

import { motion } from 'framer-motion';
import { TypingText } from '@/components/CustomTexts';
import React from 'react';

import { fadeIn, staggerContainer } from '@/utils/motion';

import styles from '@/styles/index';

const About: React.FC = () => (
    <section className={`${styles.paddings} relative z-10`} id="sobre">
        <div className="gradient-02 z-0" />
        <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
            <TypingText title="| Minha trajetória" textStyles="text-center" />

            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="mt-[8px] font-normal sm:text-[20px] text-[18px] text-left text-secondary-white"
            >
                <span className="font-extrabold text-white">Seja bem-vindo(a)</span> ao meu portfólio !!!
            </motion.p>

            <motion.img
                variants={fadeIn('up', 'tween', 0.3, 1)}
                src="/arrow-down.svg"
                alt="arrow down"
                className="w-[18px] h-[28px] object-contain mt-[28px] arrow-animation"
            />
        </motion.div>
    </section>
);

export default About;
