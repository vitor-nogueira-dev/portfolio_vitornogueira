'use client';
import React from 'react';
import { motion } from 'framer-motion';

import { TitleText, TypingText, HardSkillsCard, RiskDiv } from '@/components';
import { staggerContainer, fadeIn } from '@/utils/motion';

import styles from '@/styles';
import { hardSkills } from '@/constants';

const HardSkills: React.FC = () => (
    <div className={`${styles.paddings} relative z-10 mb-4 mx-8`} id="skills">
        <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
        >
            <RiskDiv />
            <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="flex justify-center flex-col items-center"
            >
                <TypingText title="| Conhecimentos" />
                <TitleText title="Estruturando o Sucesso: Minhas Habilidades Técnicas em Ação" />
                <div className="max-w-[700px] flex flex-wrap gap-[20px] justify-center items-center m-auto mt-3">
                    {hardSkills.map((skill, index) => (
                        <HardSkillsCard key={index} name={skill.name} url={skill.url} content={skill.content} />
                    ))}
                </div>
            </motion.div>
        </motion.div>
    </div>
);

export default HardSkills;
