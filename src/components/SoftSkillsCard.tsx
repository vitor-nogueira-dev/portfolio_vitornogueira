import React from 'react';
import Image from 'next/image';

import { ISoftSkillsCardProps } from '@/interfaces/ISoftSkillsCardProps';

import styles from '../styles';

const SoftSkillsCard: React.FC<ISoftSkillsCardProps> = ({ imgUrl, title, subtitle }) => (
    <div className="cardSoftSkillsExterno lg:w-[210px] lg:h-[350px] w-[213px] h-[290px]"  >
        <div className='cardSoftSkillsInterno 2 p-4 flex flex-col justify-between items-center lg:w-[210px] lg:h-[350px] w-[213px] h-[290px]'>
            <div
                className={`${styles.flexCenter} w-[50px] h-[50px] rounded-[24px] glassmorphism lg:w-[70px] lg:h-[70px]`}
            >
                <Image
                    src={imgUrl}
                    alt="icon"
                    className="w-1/2 h-1/2 object-contain"
                    width={50}
                    height={50}
                />
            </div>
            <h1 className="mt-[15px] font-bold text-[14px] lg:text-[16px] leading-[25px] text-white text-center w-[180px] ">
                {title}
            </h1>
            <p className="flex-1 mt-[16px] font-normal text-[14px] lg:text-[16px] text-[#B0B0B0] text-left w-[170px]">
                {subtitle}
            </p>
        </div>
    </div>
);

export default SoftSkillsCard;