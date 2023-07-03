'use client';
import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';

import { footerVariants } from '@/utils/motion';
import { socials } from '@/constants';

import { RedesSociaisCard, RiskDiv } from '@/components';
import styles from '@/styles';

const Footer: React.FC = () => (
    <motion.footer
        variants={footerVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} lg:py-8 md:py-8 relative`}
    >
        <div className="footer-gradient" />
        <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
            <div className="flex flex-col">
                <RiskDiv />
                <div className="flex items-center justify-evenly gap-4 z-10">
                    <Image
                        src="/vn1.png"
                        alt="logo "
                        width={208}
                        height={52}
                    />
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
            </div>
        </div>
    </motion.footer>
);

export default Footer;
