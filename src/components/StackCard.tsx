import React from 'react';
import styles from '../styles';
import { IStackCardProps } from '@/interfaces/IStackCardProps';
import Image from 'next/image';

const StackCard: React.FC<IStackCardProps> = ({ stack }) => (
  <div
    className={`${styles.flexCenter} w-[50px] h-[50px] rounded-[24px] glassmorphism mb-[16px] m-1 lg:w-[60px] lg:h-[40px]`}
  >
    <Image
      src={stack}
      className="object-contain"
      alt='stack'
      width={25}
      height={25}
    />
  </div>
);

export default StackCard;
