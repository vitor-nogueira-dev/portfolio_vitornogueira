
import { IHardSkillsCardProps } from '@/interfaces/IHardSkillsCardProps';
import styles from '@/styles';
import Image from 'next/image';
import React from 'react';
import { Tooltip, Whisper, Button, ButtonToolbar } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const HardSkillsCard: React.FC<IHardSkillsCardProps> = ({ name, url, content }) => (
    <div className={`${styles.flexCenter} flex-row`}>
        <ButtonToolbar>
            <Whisper placement="bottom" controlId="control-id-hover" trigger="hover" speaker={
                <Tooltip style={{ width: '200px', marginLeft: '10px' }}>
                    {content}
                </Tooltip>
            }>
                <div
                    className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] glassmorphism mb-[16px] m-1`}
                    title={name}
                >
                    <Image
                        src={url}
                        className="w-1/2 h-1/2 object-contain cursor-pointer"
                        width={40}
                        height={40}
                        alt={name}
                    />
                </div>
            </Whisper>
        </ButtonToolbar>
    </div>
);

export default HardSkillsCard;
