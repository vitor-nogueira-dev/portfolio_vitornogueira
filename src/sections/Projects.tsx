import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { TitleText, TypingText, ProjectCard } from '@/components';

import { projects } from '@/constants';
import { staggerContainer } from '@/utils/motion';

import styles from '@/styles';

const Projects: React.FC = () => {
    const [active, setActive] = useState<string>('world-2');
    const [isLgScreen, setIsLgScreen] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLgScreen(window.innerWidth >= 1024);
        };

        if (typeof window !== 'undefined') {
            setIsLgScreen(window.innerWidth >= 1024);
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return (
        <section className='sm:p-16 xs:p-8 px-6 py-12 mt-24 border' id="projetos" >
            <motion.div
                variants={staggerContainer(0.1, 0.1)}
                initial="hidden"
                animate="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <TypingText title="| Desenvolvendo Soluções Criativas" textStyles="text-center" />
                <TitleText title="Projetos" textStyles="text-center" />
                <div className="mt-[20px] flex lg:flex-row flex-col gap-5  sm:h-[700px] md:h-[780px] lg:h-[520px] h-[780px]">
                    {projects.map((world, index) => (
                        <ProjectCard
                            key={world.id}
                            {...world}
                            id={world.id}
                            mobUrl={world.mobUrl}
                            deskUrl={world.deskUrl}
                            title={world.title}
                            index={index}
                            active={active}
                            handleClick={setActive}
                            isLgScreen={isLgScreen}
                            repositorio={world.repositorio}
                            deploy={world.deploy}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
