'use client';

import { motion } from 'framer-motion';

import { TitleText, TypingText } from '@/components';
import { staggerContainer, fadeIn } from '@/utils/motion';

import styles from '@/styles';
import React from 'react';
import { softSkills } from '@/constants';
import { SoftSkillsCard } from '@/components';

const SoftSkills: React.FC = () => (
    <section className={`${styles.paddings} max-w-[1200px] marker:relative z-10 m-auto`}>
        <motion.div
            variants={staggerContainer(0.2, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        >
            <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className="flex-[0.95] flex justify-center flex-col items-center"
            >
                <TypingText title="| Softskills" />
                <TitleText title="Construindo com Empatia e Colaboração: Minhas Habilidades Além do Código" />
                <div className="mt-[48px] flex flex-wrap justify-center gap-[24px] max-w-[900px]">
                    {softSkills.map((softSkill) => (
                        <SoftSkillsCard
                            key={softSkill.title}
                            imgUrl={softSkill.imgUrl}
                            title={softSkill.title} subtitle={softSkill.subtitle}
                        />
                    ))}
                </div>
            </motion.div>
        </motion.div>
    </section>
);

export default SoftSkills;
