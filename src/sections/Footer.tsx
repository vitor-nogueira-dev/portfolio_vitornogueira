'use client';
import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';

import { footerVariants } from '@/utils/motion';
import { socials } from '@/constants';

import { RedesSociaisCard } from '@/components';
import styles from '@/styles';

const Footer: React.FC = () => (
    <motion.footer
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}
    >
        <div className="footer-gradient" />
        <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
            <div className="flex items-center justify-center flex-wrap gap-3">
                <h4 className="font-bold text-[16px] text-left text-white w-[600px]">
                    Interessado em discutir oportunidades profissionais? Estou aberto a novas oportunidades e adoraria colaborar com você! Entre em contato comigo e vamos conversar!
                </h4>
                <div className="flex gap-4 flex-row">
                    {socials.map((social) => (
                        <RedesSociaisCard
                            key={social.name}
                            link={social.link}
                            name={social.name}
                            url={social.url}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col">
                <div className="mb-[50px] h-[2px] bg-white opacity-10" />
                <div className="flex items-center justify-center gap-4 z-10">
                    <Image
                        src="/vn1.png"
                        alt="logo "
                        width={208}
                        height={52}
                    />
                </div>
            </div>
        </div>
    </motion.footer>
);

export default Footer;
