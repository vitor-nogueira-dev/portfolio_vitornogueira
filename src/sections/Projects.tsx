import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Tab, Tabs } from 'react-bootstrap';

import { TitleText, TypingText, ProjectCard, RiskDiv } from '@/components';
import { projectsFrontend, projectsBackend, projectsFullstack } from '@/constants';
import { staggerContainer } from '@/utils/motion';

const Projects: React.FC = () => {
    const [activeTab, setActiveTab] = useState('frontend');

    const handleTabChange = (tab: any): void => {
        setActiveTab(tab);
    };

    const renderProjects = (projects: any[]) =>
        projects.map((project, index) => (
            <ProjectCard
                key={index}
                title={project.title}
                stacks={project.stacks}
                mobUrl={project.mobUrl}
                endpoints={project.endpoints}
                description={project.description}
                repositorio={project.repositorio}
                deploy={project.deploy}
            />
        ));

    return (
        <section className='sm:p-16 xs:p-8 px-6' id="projetos" >
            <motion.div
                variants={staggerContainer(0.1, 0.1)}
                initial="hidden"
                animate="show"
                viewport={{ once: false, amount: 0.25 }}
                className="mx-auto flex flex-col"
            >
                <RiskDiv />
                <TypingText title="| Desenvolvendo Soluções Criativas" />
                <TitleText title="Projetos" textStyles='m-auto' />
                <div>
                    <Tabs
                        id="uncontrolled-tab-example"
                        className="flex items-center justify-center w-full"
                        activeKey={activeTab}
                        onSelect={(tab) => handleTabChange(tab)}
                    >
                        <Tab
                            eventKey="frontend"
                            title={<span className="btn">Front-end</span>}
                            className="text-white"
                        >
                            <Container className='max-w-[1000px]'>
                                <Row className="justify-content-center flex-wrap">
                                    {renderProjects(projectsFrontend)}
                                </Row>
                            </Container>
                        </Tab>
                        <Tab
                            eventKey="backend"
                            title={<span className="btn">Back-end</span>}
                            className="text-white"
                        >
                            <Container className='max-w-[1000px]'>
                                <Row className="justify-content-center flex-wrap">
                                    {renderProjects(projectsBackend)}
                                </Row>
                            </Container>
                        </Tab>
                        <Tab
                            eventKey="fullstack"
                            title={<span className="btn">Full Stack</span>}
                            className="text-white"
                        >
                            <Container className='max-w-[1000px]'>
                                <Row className="justify-content-center flex-wrap">
                                    {renderProjects(projectsFullstack)}
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
