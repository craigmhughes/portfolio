import React, {createRef} from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

import RenderCanvas from './Canvas';

export default function Home(){

    const canvasParent = createRef();

    // Animation object decides styles for each animation state.
    const pageTransition = {
        in: {
            opacity: 1,
            x: "-100%",
        },
        init: {
            opacity: 1,
            x: 0,
        },
        out: {
            opacity: 0,
            x: "-100%",
        }
    };

    return(
        <main className="Home-slide">
        
            <motion.section className="Home-slide__content--first"
            initial="in"
            animate="init"
            exit="out"
            variants={pageTransition}
            >
                <img src={require("../assets/images/me.webp")} alt="Profile Shot" className="Home-slide__content-image"/>
                <h1 className="Home-slide__content-title">Craig Hughes</h1>
                <ul className="Home-slide__tag-list">
                    <li className="Home-slide__tag-list-item--tag">Developer</li>
                    <li className="Home-slide__tag-list-item--tag">2020Grad</li>
                </ul>

                <p className="Home-slide__content-desc">
                Hi, I’m a Web Developer based in Greater Manchester.
                <br/><br/>
                I also like to make music in my spare time. Why don’t you give it a go?
                Hit a pad and make sure your sound is on!
                </p>
                <section className="Home-slide__link-list">
                    <a href={require("../assets/cv.pdf")}>View CV</a>
                    <Link to="/work">View Work</Link>
                </section>

                <nav className="Home-slide__tag-list">
                    <a href="https://www.linkedin.com/in/craig-m-hughes/" className="Home-slide__tag-list-item">Linkedin</a>
                    <a href="https://github.com/craigmhughes" className="Home-slide__tag-list-item">Github</a>
                    <a href="https://twitter.com/hghscraig" className="Home-slide__tag-list-item">Twitter</a>
                </nav>
            </motion.section>
            <section className="Home-slide__content" ref={canvasParent}>
                <RenderCanvas parent={canvasParent}/>
            </section>
        </main>
    );
}