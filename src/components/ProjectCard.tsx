import { motion, HTMLMotionProps, Variants } from 'framer-motion';

import { fadeIn } from '@/utils/motion';
import Image from 'next/image';
import { ProjectCardProps } from '@/interfaces/IProjectCardProps';
import { StackCard } from './StackCard';

const ProjectCard: React.FC<ProjectCardProps> = ({
    id,
    mobUrl,
    deskUrl,
    title,
    index,
    active,
    handleClick,
    stacks,
    isLgScreen,
    repositorio,
    deploy,
}) => {
    const fadeInVariants = fadeIn('right', 'spring', index * 0.5, 0.75);

    return (
        <motion.div
            variants={fadeInVariants as Variants}
            className={`relative ${active === id ? 'lg:flex-[2] flex-[4] lg:max-w-[250px]' : 'lg:flex-[0.5] flex-[2]'
                } flex items-center justify-center transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer border rounded-2xl`}
            onClick={() => handleClick(id)}
        >
            <Image
                src={isLgScreen ? mobUrl : deskUrl}
                alt="planet-04"
                className={`${active !== id ? 'opacity-60' : ''} absolute w-full h-full object-cover rounded-[24px]`}
                width={337}
                height={400}
            />
            {active !== id ? (
                <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] p-10">
                    {title}
                </h3>
            ) : (
                <div className="absolute bottom-0 p-4 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)]  rounded-b-[24px] boxShadow h-[80%] lg:h-[40%]">
                    <div className="w-full flex justify-start">
                        {stacks?.map((stack, index) => (
                            <StackCard stack={stack} key={index} />
                        ))}
                    </div>
                    <span>
                        <a
                            href={repositorio}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-normal text-[16px] leading-[20.16px] text-white pb-2 hover:text-[#aeaeae]"
                        >
                            📁 Repositório
                        </a>
                    </span>
                    <span>
                        <a
                            href={deploy}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-normal text-[16px] leading-[20.16px] text-white hover:text-[#aeaeae] "
                        >
                            💻 Deploy
                        </a>
                    </span>
                    <h2 className=" mt-2 font-semibold sm:text-[22px] text-[24px] text-white">
                        {title}
                    </h2>
                </div>
            )}
        </motion.div>
    );
};

export default ProjectCard;
