'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { TitleText, TypingText } from '@/components';
import { staggerContainer, fadeIn } from '@/utils/motion';

import styles from '@/styles';

const HardSkills: React.FC = () => (
    <section className={`${styles.paddings} relative z-10`} id="skills">
        <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 border-[0.5px] rounded-[30px] p-6 border-[#7d7b7bd0]`}
        >

            <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="flex-[10] flex justify-center flex-col items-center"
            >
                <TypingText title="| Conhecimentos" />
                <TitleText title="Estruturando o Sucesso: Minhas Habilidades Técnicas em Ação" textStyles="text-center w-75" />
                <div className="mt-[31px] flex flex-wrap gap-[20px] justify-center items-center max-w-[700px]">
                    {/* stacks */}
                </div>
            </motion.div>
        </motion.div>
    </section>
);

export default HardSkills;
