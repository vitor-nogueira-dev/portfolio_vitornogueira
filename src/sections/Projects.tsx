import { motion } from 'framer-motion';

import { staggerContainer } from '@/utils/motion';
import { TitleText, TypingText } from '@/components';

import styles from '../styles';

const Projects: React.FC = () => {

    return (
        <section className={`${styles.paddings}`} id="projetos">
            <motion.div
                variants={staggerContainer(0.1, 0.1)}
                initial="hidden"
                animate="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <TypingText title="| Desenvolvendo Soluções Criativas" textStyles="text-center" />
                <TitleText title="Projetos" textStyles="text-center" />
                <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5 ">
                {/* projects */}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
