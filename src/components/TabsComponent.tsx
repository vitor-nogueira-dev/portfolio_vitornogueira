
import React from 'react';
import { motion } from 'framer-motion';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { tabsAbout } from '@/constants';
import { textVariant2 } from '@/utils/motion';

const TabsComponent: React.FC = () => {
    return (
        <Tabs
            defaultActiveKey="about"
            id="uncontrolled-tab-example"
            className="lg:mb-3 mt-4 flex items-center justify-center mb-10"
        >
            {tabsAbout.map((tab, index) => (
                <Tab
                    key={index}
                    eventKey={tab.eventKey}
                    title={<span className="btn">{tab.title}</span>}
                    className=' text-white p-6 max-w-[1000px]'
                >
                    {tab.content.split('\n\n').map((paragrafo, index) => (
                        <motion.p variants={textVariant2} key={index} className="pl-4 border-l-2 border-gray-300 text-lg font-medium text-slate-200">{paragrafo}
                        </motion.p>
                    ))}
                </Tab>
            ))
            }
        </Tabs >
    );
}

export default TabsComponent;