'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';
import { ITypingTextProps } from '@/interfaces/ITypingTextProps';
import { TitleTextProps } from '@/interfaces/ITitleTextProps';

const TypingText: React.FC<ITypingTextProps> = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);


const TitleText: React.FC<TitleTextProps> = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-8 md:mt-4 lg:mt-2 font-bold lg:text-4xl text-xl sm:text-2xl text-white border-2 w-[75%] text-center ${textStyles} m-auto`}
  >
    {title}
  </motion.h2>
);

export { TypingText, TitleText };
