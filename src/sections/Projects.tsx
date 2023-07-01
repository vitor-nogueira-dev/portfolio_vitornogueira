import { useState } from 'react';
import { motion } from 'framer-motion';

import { TitleText, TypingText, ProjectCard } from '@/components';

import { projectsFrontend } from '@/constants';
import { staggerContainer } from '@/utils/motion';

import styles from '@/styles';
import { Container, Row, Tab, Tabs } from 'react-bootstrap';

const Projects: React.FC = () => {
    const [activeTab, setActiveTab] = useState('frontend');

    const handleTabChange = (tab: any): void => {
        setActiveTab(tab);
    };

    const renderProjects = () =>
        (activeTab === 'frontend' ? projectsFrontend : [])
            .map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    stacks={project.stacks}
                />
            ));

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
                <div>
                    <Tabs
                        id="uncontrolled-tab-example"
                        className="flex items-center justify-center w-full border"
                        activeKey={activeTab}
                        onSelect={(tab) => handleTabChange(tab)}
                    >
                        <Tab
                            eventKey="frontend"
                            title={<span className="btn">Front-end</span>}
                            className="text-white border"
                        >
                            <Container>
                                <Row className="border justify-content-center flex-wrap">
                                    {renderProjects()}
                                </Row>
                            </Container>
                        </Tab>
                        <Tab
                            eventKey="backend"
                            title={<span className="btn">Back-end</span>}
                            className="text-white"
                        >
                            <Container>
                                <Row className="border justify-content-center flex-wrap">
                                    {renderProjects()}
                                </Row>
                            </Container>
                        </Tab>
                    </Tabs>
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;