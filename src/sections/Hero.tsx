'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { fadeIn, textVariant } from '@/utils/motion';
import TypingEffect from '@/components/Typical';

import { ButtonComponent, RiskDiv } from '@/components';

const Hero: React.FC = () => (
    <section className={` mt-24 flex items-center justify-center flex-col `} id="inicio">
        <div className=" flex w-full justify-center flex-wrap items-center py-2 lg:gap-6  first-letter:gap-6 ">
            <div className="pt-1 flex lg:items-start md:items-start items-center flex-col rounded-tl-[20px] z-10 rounded-bl-[20px] gap-2">
                <motion.h1 variants={textVariant(1.1)} className={'font-bold  text-[40px] leading-[50px] text-[#ffffff]'}>
                    Olá, eu sou o <br />
                    <span>Vitor Nogueira!!</span> <br />
                    <span className='text-[16px] text-[#ffffff]'>
                        Desenvolvedor, <br />
                        <TypingEffect text="Full Stack" time={5000} />
                    </span>
                </motion.h1>
                <div className="flex gap-2 ">
                    <a href="/curriculo.pdf" download>
                        <ButtonComponent content="dowload cv" />
                    </a>
                    <ButtonComponent content="contato" />
                </div>
            </div>
            <Image
                src="/photo-profile.png"
                alt="photo profile color"
                className="sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative rounded-bl-[140px] pl-4 pt-4 pb-4 "
                width={500}
                height={500}
            />
        </div>
        <motion.img
            variants={fadeIn('up', 'tween', 0.3, 1)}
            src="/arrow-down.svg"
            alt="arrow down"
            className="w-[18px] h-[28px] object-contain mt-[14px] mb-10 arrow-animation"
        />
    </section>
);

export default Hero;
