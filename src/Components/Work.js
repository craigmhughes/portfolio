import React from 'react';
import {motion} from 'framer-motion';

import WorkItem from './WorkItem';
import works from './works.json';

export default function Work(){

    const workItems = works.map(item => <WorkItem 
        title={item.title} date={item.date} subtitle={item.subtitle} 
        links={item.links} icons={item.stack}/>);

    // Animation object decides styles for each animation state.
    const pageTransition = {
        in: {
            opacity: 1,
            y: "-100%",
        },
        init: {
            opacity: 1,
            y: 0,
        },
        out: {
            opacity: 0,
            y: "-100%",
        }
    };

    return(
        <motion.main className="Work"
        initial="in"
        animate="init"
        exit="out"
        variants={pageTransition}
        >
            <h1 className="Work__title">My Projects</h1>
            <section className="Work__items">
                {workItems}
            </section>
        </motion.main>
    );
}