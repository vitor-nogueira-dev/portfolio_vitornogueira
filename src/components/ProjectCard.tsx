import { Button, Col } from 'react-bootstrap';

import { IProjectCardProps } from '@/interfaces/IProjectCardProps';

import { StackCard } from '@/components';
import { useState } from 'react';
import { ModalComponent } from '@/components';

const ProjectCard: React.FC<IProjectCardProps> = ({
    title,
    stacks,
    mobUrl,
}) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Col md={4} lg={4} sm={12} className="m-2 card-project h-[200px] lg:w-[300px] w-[300px]">
            <div className="card-project-details">
                <p className="text-[1.5em] font-bold text-center">{title}</p>
                <div className="w-full flex justify-start mb-2">
                    {stacks?.map((stack, index) => (
                        <StackCard stack={stack} key={index} />
                    ))}
                </div>
            </div>
            <ModalComponent
                show={modalShow}
                onHide={() => setModalShow(false)}
                title={title}
                mobUrl={mobUrl}
            />
            <button className="card-project-button btn z-10" onClick={() => setModalShow(true)}>visualizar projeto</button>
        </Col>
    );
};

export default ProjectCard;
