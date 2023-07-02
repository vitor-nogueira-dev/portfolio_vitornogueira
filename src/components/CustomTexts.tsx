'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';
import { ITypingTextProps } from '@/interfaces/ITypingTextProps';
import { TitleTextProps } from '@/interfaces/ITitleTextProps';

const TypingText: React.FC<ITypingTextProps> = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`md:mt-4 lg:mt-2 lg:text-2xl text-sm font-normal text-[14px] text-secondary-white text-center ${textStyles}`}
  >
    <motion.span variants={textVariant2}>
      {title}
    </motion.span>
  </motion.p>
);


const TitleText: React.FC<TitleTextProps> = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-2 md:mt-4 lg:mt-2 font-bold lg:text-3xl text-xl sm:text-2xl text-white  text-center w-[300px] lg:w-[700px] md:w-[600px] ${textStyles}`}
  >
    {title}
  </motion.h2>
);

export { TypingText, TitleText };
